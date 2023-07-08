'use client';
import React, { Fragment } from 'react'
import SideBlock from '@mae/components/frontpageBlocks/SideBlock'
import {useLanyardWS} from 'use-lanyard';
import Image from 'next/image';
import Link from 'next/link';

export default function LanyardBlock({id}: {id: `${bigint}`}) {
  const lanyard = useLanyardWS(id);
  if(!lanyard) return (
    <SideBlock title="⚠️ status server unreachable">
      <p className='text-sm text-center'>
        couldn't reach the status server ☹️
        <span className='h-4'></span>
        check if your browser + connection supports WebSockets
      </p>
    </SideBlock>
  );

  return (
    <Fragment>
      {
        /* Online status*/
        lanyard.discord_status != 'offline' &&
        <SideBlock title="🟢 online">
        </SideBlock>
      }
      {
        /* Offline status*/
        lanyard.discord_status == 'offline' &&
        <SideBlock title="🌌 offline">
        </SideBlock>
      }
      {
        /* Spotify now playing */
        lanyard.spotify && 
        <SideBlock title="🎧 now playing">
          <div className='flex flex-row gap-2'>
            {
              lanyard.spotify.album_art_url &&
              <Image src={lanyard.spotify.album_art_url} alt="Album art" width={48} height={48} className='w-fit h-fit'/>
            }
            <div className="flex flex-col justify-center">
              <Link href={`https://open.spotify.com/track/${lanyard.spotify.track_id}`} className='text-white hover:underline'>
                <h2 className='text-sm font-medium'>{lanyard.spotify.song}</h2>
              </Link>
              <h3 className='text-xs'>{lanyard.spotify.artist.replace(/;/g, ",")}</h3>
            </div>
          </div>
        </SideBlock>
      }
    </Fragment>
  )
}
