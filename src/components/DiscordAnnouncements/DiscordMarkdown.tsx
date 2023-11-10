import * as React from 'react';
import {marked} from 'marked';

type DiscordMarkdownProps = { content: string };

// const bold = /\*\*(.+?)\*\*/gim
// const italics = /\*(.+)\*/gim
// const underline = /__(.+)__/gim
// const strikethrough = /~~(.+)~~/gim
// const code = /```(.+)```/gim
// const codeBlock = /`(.+)`/gim
// const blockquote = />(.+)/gim
const spoiler = /\|\|(.+)\|\|/gim
// custom emoji format: <a:Pepe_Ride_Dog:854902183714619412> "a" is for animated
const customEmoji = /<a?:(\w+):(\d+)>/gim
const mention = /<@!(\d+)>/gim


// parse discord markdown into jsx
export const DiscordMarkdown: React.FC<DiscordMarkdownProps> = ({ content }) => {
  const parsedContent = content
    // .replace(bold, '<strong>$1</strong>')
    // .replace(italics, '<em>$1</em>')
    // .replace(underline, '<u>$1</u>')
    // .replace(strikethrough, '<del>$1</del>')
    // .replace(code, '<pre><code>$1</code></pre>')
    // .replace(codeBlock, '<code>$1</code>')
    // .replace(blockquote, '<blockquote>$1</blockquote>')
    .replace(spoiler, '<span class="spoiler">$1</span>')
    .replace(customEmoji, '<img class="inline-block h-[1lh]" src="https://cdn.discordapp.com/emojis/$2" alt=":$1:" />')
    .replace(mention, '<span class="mention">@$1</span>').replace(/(?:\r\n|\r|\n)/g, '<br />');
  const parsedMarkdown = marked.parse(parsedContent)

  return (
    // eslint-disable-next-line react/no-danger
    <div dangerouslySetInnerHTML={{ __html: parsedMarkdown }} />
  )
}