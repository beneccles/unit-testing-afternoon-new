import React from 'react';
import {render} from '@testing-library/react';
import PostWidget from '../components/PostWidget';
import {MemoryRouter} from 'react-router-dom';
import {shortenText} from '../utils/functions';
import {posts} from './__data__/testData';

const longPost = posts[0];
const post = posts[1];

it ('Inner text content contains the passed in posts text content', () => {
    const { container } = render(
        <MemoryRouter>
            <PostWidget {...post} />
        </MemoryRouter>
    );

    expect(container.textContent).toContain(post.text);
})

it ('Passing in a longPost will shorten the displayed text by default', () => {
    const { container } = render(
        <MemoryRouter>
            <PostWidget {...longPost}/>
        </MemoryRouter>
    );

    expect(container.textContent).toContain(shortenText(longPost.text))
})

it ('Displays all text when expanded is true', () => {
    const { container } = render(
        // Check to see if the text is all there when the post is expanded.
        <MemoryRouter>
            <PostWidget expanded={true} {...longPost} />
        </MemoryRouter>
    )

    expect(container.textContent).toContain(longPost.text);
})