// wtc-references-data.ts
// Structured reference data for bell hooks, "The Will to Change: Men, Masculinity, and Love" (Atria Books, 2004)

export interface Author {
  name: string;
  field: string;
  works: Work[];
  pages: string;
  context: string;
  keyFigure?: boolean;
}

export interface Work {
  title: string;
  type: 'book' | 'article' | 'study' | 'film' | 'talk' | 'dissertation' | 'report' | 'other';
  year: number | string;
  publisher?: string;
  coAuthors?: string[];
}

export interface Institution {
  name: string;
  type: string;
  context: string;
  pages: string;
}

export interface StudyRef {
  name: string;
  authors?: string;
  year?: string;
  finding: string;
  pages: string;
}

// ---------------------------------------------------------------------------
// AUTHORS
// ---------------------------------------------------------------------------

export const authors: Author[] = [
  {
    name: "hooks, bell (Gloria Jean Watkins)",
    field: "Black Feminist Theory / Cultural Criticism",
    works: [
      { title: "Ain't I a Woman: Black Women and Feminism", type: "book" as const, year: 1981, publisher: "South End Press" },
      { title: "Feminist Theory: From Margin to Center", type: "book" as const, year: 1984, publisher: "South End Press" },
      { title: "Feminism Is for Everybody: Passionate Politics", type: "book" as const, year: 2000, publisher: "South End Press" },
      { title: "All About Love: New Visions", type: "book" as const, year: 2000, publisher: "William Morrow" },
      { title: "Salvation: Black People and Love", type: "book" as const, year: 2001, publisher: "William Morrow" },
      { title: "Communion: The Female Search for Love", type: "book" as const, year: 2002, publisher: "William Morrow" },
      { title: "The Will to Change: Men, Masculinity, and Love", type: "book" as const, year: 2004, publisher: "Atria Books" },
      { title: "Bone Black: Memories of Girlhood", type: "book" as const, year: 1996, publisher: "Henry Holt" },
      { title: "Wounds of Passion: A Writing Life", type: "book" as const, year: 1997, publisher: "Henry Holt" },
      { title: "Be Boy Buzz", type: "book" as const, year: 2002, publisher: "Hyperion (children's book)" }
    ],
    pages: "Author of the entire book; previous work cited throughout",
    context: "bell hooks (Gloria Jean Watkins, 1952-2021) was a Black American feminist theorist, cultural critic, and prolific author of 30+ books. Professor at Berea College in Kentucky when she wrote The Will to Change. Foundational figure of Black feminist thought and intersectional theory. Chapter 'Men: Comrades in Struggle' in her 1984 Feminist Theory: From Margin to Center was one of the earliest feminist arguments for including men in liberation work. Her 'love trilogy' — All About Love (2000), Salvation (2001), Communion (2002) — preceded The Will to Change (2004) as the fourth volume.",
    keyFigure: true
  },

  // ---- Core theoretical interlocutors ----
  {
    name: "Real, Terrence",
    field: "Family Therapy / Men's Psychology",
    works: [
      { title: "I Don't Want to Talk About It: Overcoming the Secret Legacy of Male Depression", type: "book" as const, year: 1997, publisher: "Scribner" },
      { title: "How Can I Get Through to You? Reconnecting Men and Women", type: "book" as const, year: 2002, publisher: "Scribner" }
    ],
    pages: "Quoted throughout, especially Chs. 2, 3, 4, 9, 10, 11",
    context: "hooks's single most-cited contemporary source. Real is a family therapist whose clinical work focuses on male depression and on the relational costs of patriarchal masculinity. His concept of 'psychological patriarchy' (the internalized 'dance of contempt' that shapes relationships even when no male is present) is central to hooks's framework. His formulation 'disconnection is not fallout from traditional masculinity; disconnection IS masculinity' is hooks's anchor in Ch. 4. Real also provides the 'normal traumatization' concept and the Alexander-Barbie vignette.",
    keyFigure: true
  },
  {
    name: "Bradshaw, John",
    field: "Psychotherapy / Pop Psychology",
    works: [
      { title: "Creating Love: The Next Great Stage of Growth", type: "book" as const, year: 1992, publisher: "Bantam" },
      { title: "Healing the Shame That Binds You", type: "book" as const, year: 1988, publisher: "Health Communications" },
      { title: "Bradshaw On: The Family", type: "book" as const, year: 1988, publisher: "Health Communications" }
    ],
    pages: "Chs. 2, 10, 11",
    context: "Popular psychotherapist cited for his definition of patriarchy as 'a social organization marked by the supremacy of the father,' characterized by 'blind obedience, repression of all emotions except fear, destruction of individual willpower, and the repression of thinking.' Bradshaw's work on the false self and the split psyche is central to Ch. 10 ('Reclaiming Male Integrity'). hooks treats him as a 'visionary male healer.'",
    keyFigure: true
  },
  {
    name: "Peck, M. Scott",
    field: "Psychotherapy / Pop Psychology",
    works: [
      { title: "The Road Less Traveled", type: "book" as const, year: 1978, publisher: "Simon & Schuster" },
      { title: "Further along the Road Less Traveled", type: "book" as const, year: 1993, publisher: "Simon & Schuster" }
    ],
    pages: "Chs. 4, 10",
    context: "hooks's operational definition of love — 'the will to nurture one's own and another's spiritual and emotional growth' — comes from Peck. He also provides the framing of integrity as 'integration' (the opposite of compartmentalization). The stages of change quote (denial, anger, bargaining, depression, acceptance) in Ch. 10 is Peck applying Kübler-Ross to personal growth.",
    keyFigure: true
  },
  {
    name: "Fromm, Erich",
    field: "Psychoanalysis / Social Theory",
    works: [
      { title: "The Art of Loving", type: "book" as const, year: 1956, publisher: "Harper & Row" },
      { title: "Escape from Freedom", type: "book" as const, year: 1941 }
    ],
    pages: "Ch. 4",
    context: "hooks's operational definition of love blends Peck's 'will to nurture' with Fromm's insight that 'love is action and not solely feeling.' This combination — love as practice rather than emotion — is the book's methodological foundation.",
    keyFigure: true
  },
  {
    name: "Silverstein, Olga",
    field: "Family Therapy",
    works: [
      { title: "The Courage to Raise Good Men", type: "book" as const, year: 1994, publisher: "Viking", coAuthors: ["Beth Rashbaum"] }
    ],
    pages: "Chs. 3, 4, 7",
    context: "Family therapist whose work on mother-son relationships is foundational for hooks's treatment of maternal patriarchy. Silverstein's catalog of traits that define feminist masculinity (integrity, self-love, emotional awareness, assertiveness, and relational skill) is hooks's positive prescription in Ch. 7. The Silverstein-Rashbaum book is cited as one of the few feminist works that offers alternative strategies for raising boys without succumbing to the 'single mothers can't raise sons' myth.",
    keyFigure: true
  },
  {
    name: "Dinnerstein, Dorothy",
    field: "Feminist Psychoanalysis",
    works: [
      { title: "The Mermaid and the Minotaur: Sexual Arrangements and Human Malaise", type: "book" as const, year: 1976, publisher: "Harper & Row" }
    ],
    pages: "Ch. 4",
    context: "Feminist psychoanalytic work on the effects of mother-monopoly child-rearing. hooks uses Dinnerstein as the theoretical foundation for her discussion of boys' rage at the autocratic power of mothers — rage that, unaddressed, becomes adult male violence against women. Dinnerstein insisted that male engagement in parenting was needed to break the projection of the mother as all-powerful.",
    keyFigure: true
  },

  // ---- Feminist allies and interlocutors ----
  {
    name: "Deming, Barbara",
    field: "Feminist Theory / Nonviolence",
    works: [
      { title: "Prisons That Could Not Hold", type: "book" as const, year: 1985, publisher: "Spinsters Ink" },
      { title: "We Cannot Live Without Our Lives", type: "book" as const, year: 1974, publisher: "Grossman" },
      { title: "Remembering Who We Are: Barbara Deming in Conversation with Dina Bachelor", type: "other" as const, year: 1981 }
    ],
    pages: "Preface, Chs. 1, 9",
    context: "Barbara Deming (1917-1984) was a feminist nonviolence activist and writer. hooks quotes her repeatedly as the rare feminist voice who refused to treat men as 'hopeless.' Deming's account of her father's death ('the first time in my life that I had felt able to really touch my father's body') is a recurring touchstone for hooks's own reconciliation with her father. Deming's formulation that men are 'furious at being caught up in the lie…homesick for the truth' is central to hooks's framing.",
    keyFigure: true
  },
  {
    name: "Dworkin, Andrea",
    field: "Radical Feminist Theory",
    works: [
      { title: "Scapegoat: The Jews, Israel, and Women's Liberation", type: "book" as const, year: 2000, publisher: "Free Press" },
      { title: "Intercourse", type: "book" as const, year: 1987, publisher: "Free Press" },
      { title: "Pornography: Men Possessing Women", type: "book" as const, year: 1981, publisher: "Putnam" }
    ],
    pages: "Ch. 4",
    context: "hooks cites Dworkin's Scapegoat for the scale of male violence against women (UN statistics, DOJ, AMA). Dworkin's radical feminist anti-porn and anti-violence work provides the statistical backbone for hooks's claims about the everyday violence of patriarchy."
  },
  {
    name: "Ehrenreich, Barbara",
    field: "Cultural Criticism / Social History",
    works: [
      { title: "The Hearts of Men: American Dreams and the Flight from Commitment", type: "book" as const, year: 1983, publisher: "Anchor Press" },
      { title: "Blood Rites: Origins and History of the Passions of War", type: "book" as const, year: 1997, publisher: "Henry Holt" }
    ],
    pages: "Chs. 1, 6, 11",
    context: "The Hearts of Men is cited in Ch. 6 on men's ambivalence about the provider role and the 'playboy' figure as escape from it. Blood Rites is cited in Ch. 11 on the pre-patriarchal past when humans of both sexes were prey, not predators — part of hooks's argument that the 'natural male warrior' is a myth."
  },
  {
    name: "Faludi, Susan",
    field: "Journalism / Feminist Writing",
    works: [
      { title: "Stiffed: The Betrayal of the American Man", type: "book" as const, year: 1999, publisher: "William Morrow" },
      { title: "Backlash: The Undeclared War Against American Women", type: "book" as const, year: 1991, publisher: "Crown" }
    ],
    pages: "Chs. 2, 6",
    context: "Critical target in hooks's book. Faludi documented male crisis in Stiffed but refused to name patriarchy as its cause. hooks calls Stiffed 'yet another betrayal of American men' because Faludi 'spends so much time trying not to challenge patriarchy that she fails to highlight the necessity of ending patriarchy.' hooks's critique: Faludi assumed men were surprised by their lack of power, but working-class and Black women always knew men weren't all-powerful."
  },
  {
    name: "Pipher, Mary",
    field: "Clinical Psychology",
    works: [
      { title: "Reviving Ophelia: Saving the Selves of Adolescent Girls", type: "book" as const, year: 1994, publisher: "Grosset/Putnam" }
    ],
    pages: "Implicit reference (The Will to Change as 'male equivalent')",
    context: "Pipher's Reviving Ophelia is the implicit counterpart to hooks's book — The Will to Change serves a similar role for boys/men as Reviving Ophelia did for girls. This parallel is more explicit in Pollack's Real Boys (which Pipher wrote the foreword for) but runs throughout hooks's work as well."
  },
  {
    name: "Pratt, Minnie Bruce",
    field: "Feminist Poetry / Theory",
    works: [
      { title: "Rebellion: Essays 1980-1991", type: "book" as const, year: 1991, publisher: "Firebrand" }
    ],
    pages: "Ch. 7",
    context: "Quoted as representative of the feminist strand that refused to engage men ('How are men going to change? The meeting between two people, where one opposes the other, is the point of change. But I don't want the personal contact. I don't want to do it…They have to deliver themselves.'). hooks uses this as example of the feminist resistance to including men that her own book argues against."
  },

  // ---- Masculinity studies scholars ----
  {
    name: "Connell, R. W. (Raewyn)",
    field: "Sociology of Masculinity",
    works: [
      { title: "Gender Politics of Men (essay)", type: "article" as const, year: 1997 },
      { title: "Masculinities", type: "book" as const, year: 1995, publisher: "University of California Press" }
    ],
    pages: "Ch. 4",
    context: "Connell's essay 'Gender Politics of Men' is directly cited in Ch. 4 for the insight that men who try to develop a politics in support of feminism face derision from other men and skepticism from feminist women. This is one of hooks's few direct citations of a social-science masculinity scholar; it places her in cooperative relation to Connell's structural-sociological account.",
    keyFigure: true
  },
  {
    name: "Kimmel, Michael",
    field: "Sociology of Masculinity",
    works: [
      { title: "Fuel for Fantasy: The Ideological Construction of Male Lust (essay)", type: "article" as const, year: 2000 },
      { title: "Manhood in America: A Cultural History", type: "book" as const, year: 1996, publisher: "Free Press" }
    ],
    pages: "Chs. 5, 11",
    context: "Leading US sociologist of masculinity. His essay 'Fuel for Fantasy' on the construction of male lust through sexual repression is hooks's primary theoretical source in Ch. 5. Kimmel's work on the incompatibility of patriarchal male lust with genuine sexual satisfaction is central to hooks's critique of patriarchal sex."
  },
  {
    name: "Jensen, Robert",
    field: "Media Studies / Anti-Porn Feminism",
    works: [
      { title: "Patriarchal Sex (essay)", type: "article" as const, year: 1997 }
    ],
    pages: "Ch. 5",
    context: "Jensen's essay 'Patriarchal Sex' provides hooks's most radical language in Ch. 5: 'Sex is fucking. In patriarchy, there is an imperative to fuck…what matters in patriarchal sex is the male need to fuck.' Also cited on the claim that gay men's sexual practice is as patriarchal as straight men's — that patriarchal masculinity cuts across sexual orientation."
  },
  {
    name: "Bearman, Steve",
    field: "Men's Liberation / Counseling",
    works: [
      { title: "Why Men Are So Obsessed with Sex (essay)", type: "article" as const, year: 2000 }
    ],
    pages: "Chs. 5, 11",
    context: "Bearman's essay provides hooks's framework for male sexual obsession as displaced longing for emotional connection. 'Sex was, and is, presented as the road to real intimacy…the one vehicle through which it might still be possible to express and experience essential aspects of our humanness that have been slowly and systematically conditioned out of us.' Bearman's vision of reclaimed male eroticism (beyond the patriarchal model) is central to hooks's Ch. 11."
  },
  {
    name: "Pittman, Frank",
    field: "Family Therapy",
    works: [
      { title: "Man Enough: Fathers, Sons, and the Search for Masculinity", type: "book" as const, year: 1993, publisher: "Putnam" }
    ],
    pages: "Chs. 3, 4",
    context: "Family therapist cited on men's awe of a masculinity they cannot attain ('Fearing I didn't have enough of it, I was in awe of masculinity. I thought my father had some magical power he wasn't passing on to me') and on the trade-off between love and control ('while most of us want to be loved, controllers are willing to forego love if that is what it takes to be the boss')."
  },
  {
    name: "Seidler, Victor J.",
    field: "Sociology / Philosophy",
    works: [
      { title: "Rediscovering Masculinity", type: "book" as const, year: 1989, publisher: "Routledge" }
    ],
    pages: "Ch. 6",
    context: "British sociologist-philosopher of masculinity. His autobiographical testimony about how hard it was to give himself time alone — 'a feeling of panic and anxiety emerges at the very thought of spending more time with myself' — anchors hooks's Ch. 6 on work as flight from self."
  },
  {
    name: "Stoltenberg, John",
    field: "Profeminist Men's Activism",
    works: [
      { title: "Refusing to Be a Man: Essays on Sex and Justice", type: "book" as const, year: 1989 },
      { title: "Healing from Manhood (essay)", type: "article" as const, year: 1999 }
    ],
    pages: "Ch. 7",
    context: "Profeminist men's activist. Long-time partner of Andrea Dworkin. His formulation 'loving justice more than manhood' — from his essay 'Healing from Manhood' — is hooks's closing image of feminist manhood in Ch. 7: 'Choosing loyalty to manhood over selfhood leads inevitably to injustice…loving justice more than manhood relocates personal identity in selfhood—relationally, reciprocally, realistically.'"
  },
  {
    name: "Bly, Robert",
    field: "Mythopoetic Men's Movement / Poetry",
    works: [
      { title: "Iron John: A Book about Men", type: "book" as const, year: 1990, publisher: "Addison-Wesley" }
    ],
    pages: "Chs. 7, 9",
    context: "Critical target. hooks reads Iron John as mother-blaming dressed in mythic language. Bly 'is right to demand that we all look at the role mothers play in deadening the spirits of boy children, but he fails to acknowledge that such mothers in their acts of maternal sadism are really doing the work of patriarchal caretaking.' hooks's critique parallels Connell's critique of Bly as 'reactionary modernization' of patriarchy.",
    keyFigure: true
  },
  {
    name: "Farrell, Warren",
    field: "Men's Rights",
    works: [
      { title: "The Myth of Male Power", type: "book" as const, year: 1995 },
      { title: "Why Men Are the Way They Are", type: "book" as const, year: 1986 },
      { title: "The Liberated Man", type: "book" as const, year: 1974 }
    ],
    pages: "Ch. 7 (via discussion of men's movement)",
    context: "Critical target, though less directly discussed than Bly. Farrell's trajectory from pro-feminist organizer (1974) to men's rights advocate (1995) exemplifies for hooks what happens when men's movement refuses to critique patriarchy."
  },
  {
    name: "Goldberg, Herb",
    field: "Pop Psychology / Men's Movement",
    works: [
      { title: "The Hazards of Being Male", type: "book" as const, year: 1976 },
      { title: "The Inner Male", type: "book" as const, year: 1987 }
    ],
    pages: "Ch. 7 (via discussion of men's movement)",
    context: "Critical target. Cited in the context of the men's movement's failure to critique patriarchy."
  },
  {
    name: "Keen, Sam",
    field: "Men's Movement / Philosophy",
    works: [
      { title: "Fire in the Belly: On Being a Man", type: "book" as const, year: 1991, publisher: "Bantam" }
    ],
    pages: "Ch. 7 (via discussion of men's movement)",
    context: "Critical target in the men's movement discussion. Among the Bly-Farrell-Goldberg-Keen quartet, Keen is treated somewhat more sympathetically by other critics but still falls within hooks's critique."
  },

  // ---- Self-help / soul / recovery ----
  {
    name: "Zukav, Gary & Francis, Linda",
    field: "Spiritual Self-Help",
    works: [
      { title: "The Heart of the Soul: Emotional Awareness", type: "book" as const, year: 2001, publisher: "Simon & Schuster" },
      { title: "The Seat of the Soul", type: "book" as const, year: 1989 }
    ],
    pages: "Chs. 3, 5, 6, 7, 9, 10, 11",
    context: "Self-help authors cited repeatedly throughout hooks's book for their insights on anger ('Anger prevents love and isolates the one who is angry'), sexual obsession ('the sexual craving is not for sex, but for something deeper'), workaholism as 'deep sleep,' and the incompatibility of external power (manipulation and control) with intimacy. Their distinction between external power and authentic power ('the alignment of your personality with your soul') is central to hooks's Ch. 9."
  },
  {
    name: "Nouwen, Henri",
    field: "Spiritual Writing / Theology",
    works: [
      { title: "Celebrating Life (essay)", type: "article" as const, year: 1994 }
    ],
    pages: "Ch. 10",
    context: "Jesuit priest who left Ivy League teaching to work in a community for the mentally handicapped. hooks cites him as an example of a man who found integrity through service: 'where there is joy there is life.'"
  },
  {
    name: "Dalai Lama (Tenzin Gyatso)",
    field: "Buddhist Philosophy",
    works: [
      { title: "Ethics for the New Millennium", type: "book" as const, year: 1999, publisher: "Riverhead" }
    ],
    pages: "Ch. 9",
    context: "Spiritual teacher from the Global South. hooks cites his call for a 'spiritual revolution' based on compassion as one of the visionary male voices offering an alternative to patriarchal masculinity. 'Compassion is one of the principal things that make our lives meaningful…through kindness, through affection, through honesty, through truth and justice toward all others we ensure our own benefit.'",
    keyFigure: true
  },
  {
    name: "Thich Nhat Hanh",
    field: "Zen Buddhism / Peace Activism",
    works: [
      { title: "The Raft Is Not the Shore: Conversations Toward a Buddhist-Christian Awareness", type: "book" as const, year: 1975, publisher: "Beacon Press", coAuthors: ["Daniel Berrigan"] }
    ],
    pages: "Chs. 9, 11",
    context: "Vietnamese Zen Buddhist monk and peace activist, exiled during the Vietnam War. hooks quotes his conversations with Daniel Berrigan on 'communities of resistance' as the horizon of the political program in Ch. 11. 'Communities of resistance should be places where people can return to themselves more easily, where the conditions are such that they can heal themselves and recover their wholeness.'",
    keyFigure: true
  },
  {
    name: "Berrigan, Daniel",
    field: "Christian Peace Activism / Poetry",
    works: [
      { title: "The Raft Is Not the Shore (with Thich Nhat Hanh)", type: "book" as const, year: 1975, publisher: "Beacon Press", coAuthors: ["Thich Nhat Hanh"] }
    ],
    pages: "Ch. 11",
    context: "Jesuit priest imprisoned for antiwar activities. Along with Thich Nhat Hanh, central to hooks's closing image of 'communities of resistance.'"
  },
  {
    name: "Kushner, Harold",
    field: "Jewish Theology / Popular Writing",
    works: [
      { title: "Living a Life That Matters", type: "book" as const, year: 2001, publisher: "Knopf" },
      { title: "When Bad Things Happen to Good People", type: "book" as const, year: 1981 }
    ],
    pages: "Ch. 10",
    context: "Rabbi whose definition of integrity — 'being whole, unbroken, undivided. It describes a person who has united the different parts of his or her personality, so that there is no longer a split in the soul' — hooks takes as central to Ch. 10."
  },
  {
    name: "Branden, Nathaniel",
    field: "Psychology / Self-Esteem",
    works: [
      { title: "Six Pillars of Self-Esteem", type: "book" as const, year: 1994, publisher: "Bantam" }
    ],
    pages: "Ch. 10",
    context: "Cited on the relationship between integrity and self-esteem. His confession that he once believed lies were necessary to protect others, only to discover that 'lies do not work,' parallels hooks's argument that the mask of masculinity undermines male self-esteem."
  },
  {
    name: "Bliss, Shepherd",
    field: "Men's Studies / Peace Activism",
    works: [
      { title: "My War Story (essay)", type: "article" as const, year: 2000 }
    ],
    pages: "Ch. 11",
    context: "Former soldier turned peace advocate. His essay 'My War Story' provides hooks's alternative list of male archetypes to replace the warrior: 'guardian, boundary-setter, husbandman, citizen.'"
  },
  {
    name: "Hillman, James",
    field: "Archetypal Psychology",
    works: [
      { title: "The Soul of Sex", type: "book" as const, year: 1999, publisher: "HarperSanFrancisco" }
    ],
    pages: "Ch. 11",
    context: "Cited on the reconciliation of body and spirit as precondition for a 'soul-filled sexuality.' Hillman's archetypal psychology is part of the Jungian tradition hooks engages critically — Bly also emerges from this tradition but hooks distinguishes Hillman's work as more useful."
  },
  {
    name: "Moore, Thomas",
    field: "Soul / Spirituality",
    works: [
      { title: "Care of the Soul", type: "book" as const, year: 1992, publisher: "HarperCollins" },
      { title: "Little Boy Found (essay)", type: "article" as const, year: 1996 }
    ],
    pages: "Chs. 9, 11",
    context: "hooks critiques Moore's Care of the Soul for failing to acknowledge that soul care necessarily involves self-nurturance — a 'patriarchal bias' in his conclusion. But she uses his 'Little Boy Found' essay on nonpatriarchal adoration of the boy as positive source in Ch. 11."
  },

  // ---- Black writers and thinkers ----
  {
    name: "Baldwin, James",
    field: "Literature / Cultural Criticism",
    works: [
      { title: "The Fire Next Time", type: "book" as const, year: 1963, publisher: "Dial Press" }
    ],
    pages: "Ch. 10",
    context: "Baldwin's account of the Black church as a space where emotion could be expressed — 'when the church and I were one. Their pain and their joy were mine' — is hooks's example of Black male grieving. The Black church is one of the few locations hooks identifies where Black men are permitted to feel.",
    keyFigure: true
  },
  {
    name: "Walker, Alice",
    field: "Literature / Womanism",
    works: [
      { title: "The Color Purple", type: "book" as const, year: 1982, publisher: "Harcourt Brace Jovanovich" }
    ],
    pages: "Ch. 9",
    context: "hooks's primary fictional case study for male transformation. Mister/Albert's change from violent dominator to contemplative, caring member of community is 'a utopian vision of the process by which men who embody a destructive sexist masculinity change.' Celie's willingness to forgive Albert is central to the transformation — it models the love ethic hooks prescribes."
  },
  {
    name: "Beam, Joseph",
    field: "Black Gay Literature",
    works: [
      { title: "Brother to Brother: Words from the Heart (essay)", type: "article" as const, year: 1986 }
    ],
    pages: "Ch. 10",
    context: "Black gay writer and activist who died of AIDS. His essay on living with anger — 'my body contains as much anger as water. It is the material from which I have built my house…that fiery anger is stoked with the fuels of contempt and despisal shown me by my community because I am gay. I cannot go home as I am' — is one of hooks's anchor voices on the intersection of race, sexuality, and rage."
  },
  {
    name: "Shenitz, Bruce (editor)",
    field: "Literature / Men's Studies",
    works: [
      { title: "The Man I Might Become: Gay Men Write about Their Fathers", type: "book" as const, year: 2002, publisher: "Marlowe & Company" }
    ],
    pages: "Ch. 3",
    context: "Edited anthology of gay men's essays about their fathers. hooks cites James Saslow ('Daddy Was a Hot Number') on paternal sadism and Bob Vance ('Finding the Light and Keeping It in Front of Me') on the fundamental distance between fathers and sons."
  },
  {
    name: "Smith, George Edmond",
    field: "Therapy / Black Men's Recovery",
    works: [
      { title: "Walking Proud: Black Men Living Beyond the Stereotypes", type: "book" as const, year: 2000, publisher: "Kensington" }
    ],
    pages: "Ch. 10",
    context: "Therapist whose work on Black male psychology hooks cites on the rage of fathers who could not say 'I don't know' to their sons, and on the therapeutic insight that 'simple things that are unselfish' are catalysts for change."
  },

  // ---- Other cited voices ----
  {
    name: "Weinberg, George",
    field: "Clinical Psychology",
    works: [
      { title: "Why Men Won't Commit", type: "book" as const, year: 2002 }
    ],
    pages: "Ch. 1",
    context: "Quoted on the pattern that 'most men are on quest for the ready-made perfect woman because they basically feel that problems in a relationship can't be worked out. When the slightest thing goes wrong, it seems easier to bolt than talk.'"
  },
  {
    name: "Waldron, Jan",
    field: "Memoir",
    works: [
      { title: "In the Country of Men", type: "book" as const, year: 2000 }
    ],
    pages: "Ch. 1",
    context: "Waldron's memoir provides hooks's epigraph on father hunger: 'The love of a father is an uncommon gem, to be hunted, burnished, and hoarded. The value goes up because of its scarcity.'"
  },
  {
    name: "Dutton, Donald",
    field: "Clinical Psychology / Criminology",
    works: [
      { title: "The Batterer: A Psychological Profile", type: "book" as const, year: 1995, publisher: "Basic Books" }
    ],
    pages: "Chs. 3, 4, 10",
    context: "Cited on the psychological profile of abusive men: 'If it happens repeatedly with more than one woman, he goes from blaming her to blaming them. His personal shortcomings become rationalized by an evolving misogyny…the man is programmed for intimate violence.' Also on men's inability to grieve: 'Men in particular seem incapable of grieving and mourning on an individual basis.'"
  },
  {
    name: "Loring, Marti Tamm",
    field: "Social Work",
    works: [
      { title: "Emotional Abuse: The Trauma and the Treatment", type: "book" as const, year: 1994, publisher: "Jossey-Bass" }
    ],
    pages: "Ch. 4",
    context: "Definition of emotional abuse as 'an ongoing process in which one individual systematically diminishes and destroys the inner self of another' — hooks uses this to extend the discussion of male violence beyond the physical."
  },
  {
    name: "Hagan, Kay Leigh",
    field: "Feminist Writing",
    works: [
      { title: "A Good Man Is Hard to Bash (essay)", type: "article" as const, year: 1995 }
    ],
    pages: "Chs. 4, 11",
    context: "hooks quotes Hagan's autobiographical account of realizing she should not tolerate abuse to be loved, and her list of what 'Good Men' do (listen more than talk, seek out women's culture, avoid vicarious emotional expression, err but receive criticism with gratitude, intervene against other men's misogyny)."
  },
  {
    name: "Eisler, Riane",
    field: "Cultural History / Partnership Theory",
    works: [
      { title: "The Power of Partnership", type: "book" as const, year: 2002, publisher: "New World Library" },
      { title: "The Chalice and the Blade", type: "book" as const, year: 1987 }
    ],
    pages: "Chs. 4, 9",
    context: "Eisler's 'partnership model' vs. 'dominator model' distinction is central to hooks's vocabulary. Quoted on David Winter's research showing that women in strongly patriarchal cultures are controlling toward sons as the only males they can control."
  },
  {
    name: "Winter, David",
    field: "Psychology",
    works: [
      { title: "Research on women in patriarchal cultures and their sons", type: "study" as const, year: "various" }
    ],
    pages: "Ch. 9",
    context: "Cited via Eisler. His research found that 'women living in countries or periods of extreme male dominance tend to be very controlling of their sons, who are the only males it is safe for them to vent against.'"
  },
  {
    name: "James, Christine A.",
    field: "Philosophy / Feminist Theory",
    works: [
      { title: "Feminism and Masculinity (essay)", type: "article" as const, year: 1998 }
    ],
    pages: "Ch. 7",
    context: "Critical reading of Bly's Iron John. Her critique ('Bly holds up the myth of the Wild Man as an exemplar…and never challenges the hierarchical dualisms that are so integrally linked to the tension he perceives between men and women') supports hooks's own verdict."
  },
  {
    name: "Sheehy, Gail",
    field: "Journalism",
    works: [
      { title: "Understanding Men's Passages", type: "book" as const, year: 1998, publisher: "Random House" },
      { title: "Passages", type: "book" as const, year: 1976 }
    ],
    pages: "Ch. 6",
    context: "Sheehy's collection of men's autobiographical accounts of wrestling with depression-inducing work. Lee May's story of leaving a soul-crushing job — 'I was faced with two hard choices. One, stay in the job…choke, strangle, die psychologically, or quit and face the possibility that we would crumble financially' — is hooks's representative case."
  },
  {
    name: "Berry, Wendell",
    field: "Poetry / Agrarianism",
    works: [
      { title: "The Unsettling of America: Culture and Agriculture", type: "book" as const, year: 1977, publisher: "Sierra Club" }
    ],
    pages: "Chs. 9, 11",
    context: "Agrarian poet and essayist. Cited on the destruction of male emotional life through 'destructive exploits we classify as manly' and on 'the deepest connection with the communion of all creatures.' Berry's wholeness-through-connectedness vision is part of hooks's alternative to patriarchal masculinity."
  },
  {
    name: "Gutierrez, Eric",
    field: "Literature / Memoir",
    works: [
      { title: "Who He Was (essay)", type: "article" as const, year: 2001 }
    ],
    pages: "Ch. 5",
    context: "Memoir essay about covering up a father's homosexuality with elaborate lies. Cited as example of how lying about sexuality is 'an accepted part of patriarchal masculinity.'"
  },
  {
    name: "Garbarino, James",
    field: "Developmental Psychology",
    works: [
      { title: "Lost Boys: Why Our Sons Turn Violent and How We Can Save Them", type: "book" as const, year: 1999, publisher: "Free Press" }
    ],
    pages: "Ch. 3",
    context: "Critical discussion in Ch. 3. hooks acknowledges Garbarino's important documentation of how boys are 'traumatized by the demand that they deny their emotions' but critiques his refusal to name 'patriarchy' — he uses 'traditional masculinity' instead, which hooks argues obscures the political dimension."
  },
  {
    name: "Kindlon, Dan & Thompson, Michael",
    field: "Clinical Psychology",
    works: [
      { title: "Raising Cain: Protecting the Emotional Life of Boys", type: "book" as const, year: 1999, publisher: "Ballantine" }
    ],
    pages: "Ch. 3",
    context: "Critical engagement in Ch. 3. hooks acknowledges Raising Cain as important research documenting boys' emotional lives — 'Every child, boys included, comes into this world wanting to love and be loved by his parents' — but critiques Kindlon and Thompson for 'carefully depoliticizing' their language: their use of 'tradition' instead of 'patriarchy' lets them describe the damage without naming the political system that causes it.",
    keyFigure: true
  },
  {
    name: "Sommers, Christina Hoff",
    field: "Anti-Feminist Philosophy",
    works: [
      { title: "The War Against Boys: How Misguided Feminism Is Harming Our Young Men", type: "book" as const, year: 2000, publisher: "Simon & Schuster" }
    ],
    pages: "Ch. 3",
    context: "Critical target. Sommers argues that 'feminism is harming our young men' by 'resocializing boys in the direction of femininity.' hooks rejects this: 'Sommers falsely assumes that educating boys to be antipatriarchal is resocializing boys in the direction of femininity. Conveniently, she ignores that feminist thinkers are as critical of sexist notions of femininity as we are of patriarchal notions of masculinity.'"
  },
  {
    name: "Levant, Robert",
    field: "Clinical Psychology / Men's Studies",
    works: [
      { title: "Masculinity Reconstructed: Changing the Rules of Manhood", type: "book" as const, year: 1995, publisher: "Dutton" }
    ],
    pages: "Ch. 7",
    context: "Levant's catalog of patriarchal male role norms — avoiding femininity, restrictive emotionality, seeking achievement and status, self-reliance, aggression, homophobia, nonrelational sexuality — is the target hooks contrasts with feminist masculinity in Ch. 7."
  },
  {
    name: "Hite, Shere",
    field: "Sexuality Research",
    works: [
      { title: "Women and Love: A Cultural Revolution in Progress", type: "book" as const, year: 1987, publisher: "Alfred A. Knopf" }
    ],
    pages: "Ch. 11",
    context: "Cited on the widespread female longing for loving men that goes unfulfilled: 'most women in this study—whether married, single, or divorced, of all ages—say they have not yet found the love they are looking for.'"
  },
  {
    name: "Chesler, Phyllis",
    field: "Feminist Psychology",
    works: [
      { title: "About Men", type: "book" as const, year: 1978, publisher: "Simon & Schuster" }
    ],
    pages: "Preface",
    context: "Critical target in the Preface. hooks was 'disappointed' by Chesler's About Men for offering only 'bits and pieces of information…there was little or no explanation, no interpretation.' hooks's own book is explicitly the response to this disappointment — an attempt to 'make men real' in the way Chesler did not."
  },
  {
    name: "Lundgren, Neale",
    field: "Men's Writing / Autobiography",
    works: [
      { title: "The Night When Sleep Awoke (essay)", type: "article" as const, year: 1995 }
    ],
    pages: "Ch. 10",
    context: "Autobiographical essay about therapeutic recovery from unexplainable depression and reconnection with grief for the father. 'Just when I thought I had exhausted my search for the father, I began to reach out for therapeutic help…I began to explore the feared terrain of my wounded heart.'"
  },
  {
    name: "Browning, Frank",
    field: "Gay Studies",
    works: [
      { title: "A Queer Geography: Journeys Toward a Sexual Self", type: "book" as const, year: 1996, publisher: "Crown" }
    ],
    pages: "Ch. 11",
    context: "Browning's distinction between 'gay identity politics' (which closes connection) and 'eros' (which widens it) is central to hooks's final vision of sexuality beyond patriarchy. 'By erotic, I mean all the powerful attractions we might have: for mentoring and being mentored, for unrealizable flirtation, for intellectual tripping, for sweaty mateship at play or at work, for spiritual ecstasy, for being held in silent grief.'"
  },
  {
    name: "Ornish, Dean",
    field: "Cardiology / Lifestyle Medicine",
    works: [
      { title: "Love and Survival: The Scientific Basis for the Healing Power of Intimacy", type: "book" as const, year: 1998, publisher: "HarperCollins" }
    ],
    pages: "Ch. 6",
    context: "Cardiologist who writes on intimacy as preventive medicine. hooks cites him in Ch. 6 on his personal struggle with workaholism: 'If the intention behind the work is to seek recognition and power…then you are setting yourself apart from others as a way of trying to feel connected to them.'"
  }
];

// ---------------------------------------------------------------------------
// INSTITUTIONS
// ---------------------------------------------------------------------------

export const institutions: Institution[] = [
  {
    name: "Berea College (Kentucky)",
    type: "Liberal Arts College",
    context: "bell hooks's institutional home when she wrote The Will to Change. Berea is one of the few tuition-free colleges in the US, with a historic commitment to educating Appalachian and working-class students of all races. hooks was Distinguished Professor in Residence here.",
    pages: "Author affiliation"
  },
  {
    name: "Atria Books / Washington Square Press / Simon & Schuster",
    type: "Commercial Publisher",
    context: "Publisher of the first hardcover edition of The Will to Change (January 2004). Atria is a Simon & Schuster imprint.",
    pages: "Title page"
  },
  {
    name: "Black Feminist Thought tradition",
    type: "Intellectual Lineage",
    context: "hooks is part of the Black feminist intellectual tradition that includes Patricia Hill Collins, Audre Lorde, Angela Davis, Alice Walker, Barbara Smith, and many others. This tradition is characterized by intersectional analysis of race, class, gender, and sexuality — and by the insistence that Black women's experience provides epistemic resources unavailable from dominant (white) feminist frameworks. hooks's willingness to name working-class and Black women's perspective on male suffering (Ch. 6 on Faludi) comes directly from this tradition.",
    pages: "Background throughout"
  },
  {
    name: "Stone Center, Wellesley College",
    type: "Research Center",
    context: "The relational-cultural theory tradition developed at the Stone Center (Jean Baker Miller, Judith Jordan, Irene Stiver, Janet Surrey) is part of hooks's background theoretical framework. Shame as 'the feeling state that accompanies emotional disconnection' (Jordan) aligns with hooks's treatment of patriarchal shaming of boys. hooks does not cite the Stone Center directly but works in parallel with its insights.",
    pages: "Background parallel"
  },
  {
    name: "Mythopoetic Men's Movement (critical target)",
    type: "Cultural Movement",
    context: "Robert Bly's 1980s-1990s men's movement, centered around Iron John (1990) and the workshops and conferences that followed. hooks treats it as a critical target throughout Chs. 7 and 9 — not because it was wrong about male pain but because it refused to critique patriarchy.",
    pages: "Chs. 7, 9"
  },
  {
    name: "Alcoholics Anonymous / 12-Step Recovery",
    type: "Grassroots Movement",
    context: "hooks cites AA in Ch. 6 as one of the few spaces where poor and working-class men can do emotional recovery work in community. The practice of recovery 'takes place in the context of community, one in which shame about failure can be expressed and male longing for healing validated.' John Bradshaw emerged from this tradition.",
    pages: "Ch. 6"
  },
  {
    name: "Buddhist / Engaged Buddhist tradition",
    type: "Spiritual Tradition",
    context: "Thich Nhat Hanh's Plum Village lineage of engaged Buddhism and the Dalai Lama's Tibetan Buddhist teaching both appear in hooks's closing chapters as sources for a spiritual-ethical alternative to patriarchal masculinity. The 'communities of resistance' horizon in Ch. 11 comes from this tradition.",
    pages: "Chs. 9, 11"
  },
  {
    name: "Black Church (African-American Protestant tradition)",
    type: "Religious-Cultural Institution",
    context: "hooks repeatedly returns to the Black church as one of the few cultural locations where Black men can express emotion, grieve, and speak their love for something greater than themselves. James Baldwin's account of the preacher and congregation becoming one is her canonical example. The church deacon who wept during testimony in her girlhood is a recurring image.",
    pages: "Chs. 9, 10"
  }
];

// ---------------------------------------------------------------------------
// STUDIES
// ---------------------------------------------------------------------------

export const studies: StudyRef[] = [
  {
    name: "Developmental research on male infant emotional expressiveness",
    authors: "Malatesta, Haviland, Brody, Fivush (cited via Kindlon & Thompson, Raising Cain)",
    year: "1970s-1990s",
    finding: "Male infants are MORE emotionally expressive than female infants — they cry more, startle more, fuss more. Adult male 'stoicism' cannot therefore be biologically given. hooks uses this as the empirical foundation of her anti-essentialism; it is the same finding Pollack and Eliot rely on.",
    pages: "Ch. 3 (opening)"
  },
  {
    name: "AMA / DOJ statistics on sexual violence",
    authors: "American Medical Association (1995), US Justice Department, UN (via Andrea Dworkin's Scapegoat)",
    year: "1990s",
    finding: "700,000+ women sexually assaulted per year in the US; 1 in 12 women stalked in her lifetime; UN names violence against women 'the world's most pervasive form of human rights abuse.'",
    pages: "Ch. 4 (opening)"
  },
  {
    name: "Terrence Real's family therapy case studies",
    authors: "Terrence Real (How Can I Get Through to You?, I Don't Want to Talk About It)",
    year: "1997-2002",
    finding: "Clinical-observational documentation that boys\' patriarchal socialization functions as 'normal traumatization' and that 'disconnection IS masculinity' rather than being its byproduct. Real's Alexander-Barbie vignette (3-year-old shamed out of wearing a Barbie costume by older boys in a 'ten-second wordless transaction') is the book's paradigmatic example of shame socialization.",
    pages: "Chs. 2, 4, 9"
  },
  {
    name: "David Winter's research on women in patriarchal cultures",
    authors: "David Winter (cited via Riane Eisler's The Power of Partnership)",
    year: "unspecified",
    finding: "Women living in countries or periods of extreme male dominance tend to be very controlling of their sons, 'who are the only males it is safe for them to vent against.' This provides hooks's empirical anchor for the 'maternal sadism' concept.",
    pages: "Ch. 9"
  },
  {
    name: "Raising Cain (Kindlon & Thompson) — engaged critically",
    authors: "Dan Kindlon, Michael Thompson",
    year: "1999",
    finding: "Documents boys' emotional lives and the culture of cruelty in adolescent male peer groups. hooks uses their finding that boys come into the world wanting to love but critiques them for using 'tradition' instead of 'patriarchy' — for depoliticizing the language.",
    pages: "Ch. 3"
  },
  {
    name: "Lost Boys (Garbarino) — engaged critically",
    authors: "James Garbarino",
    year: "1999",
    finding: "Documents the emotional trauma of boys who become violent. hooks acknowledges Garbarino's documentation is accurate but critiques his unwillingness to name patriarchy.",
    pages: "Ch. 3"
  },
  {
    name: "National survey of adolescent males on masculinity norms",
    authors: "unspecified — cited by hooks in Ch. 3",
    year: "unspecified",
    finding: "Boys agreed that to be truly manly, they must 'command respect, be tough, not talk about problems, and dominate females.' hooks uses this as evidence that patriarchal masculinity norms are internalized during adolescence.",
    pages: "Ch. 3"
  },
  {
    name: "Incredible Hulk sociological interviews",
    authors: "unspecified sociologist (cited by hooks)",
    year: "1970s-80s",
    finding: "Young male viewers asked what they would do if they had the Hulk's power said they would 'smash their mommies.' hooks uses this as evidence of boys' unexpressed rage at autocratic mothers under patriarchy.",
    pages: "Ch. 4"
  },
  {
    name: "College date rape studies",
    authors: "unspecified — cited by hooks in Ch. 4",
    year: "1990s",
    finding: "Many college men 'saw nothing wrong with forcing a woman sexually' under what they considered appropriate circumstances. 'While it may be unlikely that any of the men in this study were or became rapists, it was evident that given what they conceived as the appropriate circumstance, they could see themselves being sexually violent.'",
    pages: "Ch. 4"
  },
  {
    name: "Coopersmith self-esteem research (parallel to Pollack's finding)",
    authors: "via the broader clinical literature Pollack draws on",
    year: "1990s",
    finding: "Not directly cited by hooks but operates in the background: Pollack's own Coopersmith false-positive research showing boys increasingly lie about their inner states as they age (from grade 7 to grade 12). hooks's 'mask of masculinity' framing parallels this finding.",
    pages: "Ch. 10 (background)"
  },
  {
    name: "Arlie Hochschild's second-shift research",
    authors: "Arlie Hochschild",
    year: "1989 (The Second Shift)",
    finding: "Women working outside the home continue to do 'the lion's share of work in the home' — domestic gender dynamics remain fairly sexist despite women's entry into the workforce. hooks uses this in Ch. 4 to rebut antifeminist blame of feminism for male rage.",
    pages: "Ch. 4"
  },
  {
    name: "Studs Terkel's work on work dissatisfaction",
    authors: "Studs Terkel",
    year: "1974 (Working)",
    finding: "Extensive documentation of male dissatisfaction with work well before feminist movement. hooks uses Terkel in Ch. 2 to rebut Faludi's framing that feminism caused male unhappiness at work.",
    pages: "Ch. 2"
  },
  {
    name: "Autobiographical material from hooks",
    authors: "bell hooks",
    year: "throughout",
    finding: "The marbles-beating scene, her father's rage, her mother's complicity, her own childhood longing for father love, her adult reconciliation with her father, her relationships with partners as sites of struggle and learning. Presented as paradigmatic of broader patterns rather than as independent evidence.",
    pages: "Throughout"
  }
];

// ---------------------------------------------------------------------------
// CATEGORIES (auto-generated from author fields)
// ---------------------------------------------------------------------------

export const categories: Record<string, number> = authors.reduce<Record<string, number>>(
  (acc, author) => {
    acc[author.field] = (acc[author.field] ?? 0) + 1;
    return acc;
  },
  {}
);

// ---------------------------------------------------------------------------
// BOOK INFO
// ---------------------------------------------------------------------------

export const bookInfo = {
  title: "The Will to Change",
  subtitle: "Men, Masculinity, and Love",
  author: "bell hooks (Gloria Jean Watkins)",
  publisher: "Atria Books / Simon & Schuster",
  year: 2004,
  description:
    "bell hooks's book on men, masculinity, and love — the fourth and final volume in her love cycle (after All About Love, Salvation, and Communion). Argues that 'the crisis facing men is not the crisis of masculinity, it is the crisis of patriarchal masculinity' — that maleness as such is not the problem but its patriarchal configuration is. Rejects both the 'end of manhood' strand of antimale feminism and the mythopoetic men's movement (Bly, Farrell, Goldberg) as reactions that refuse to critique patriarchy. Prescribes a love ethic — care, commitment, knowledge, responsibility, respect, trust — as the political program that can reach men whom sociological critique and clinical therapy alone cannot. Draws on Terrence Real's 'psychological patriarchy,' John Bradshaw on the false self, M. Scott Peck and Erich Fromm on love as practice, Olga Silverstein and Dorothy Dinnerstein on maternal patriarchy, the Dalai Lama and Thich Nhat Hanh on compassion, and Connell's sociological framework (hooks cites Connell's essay 'Gender Politics of Men' directly in Ch. 4). Distinctive for naming both paternal AND maternal violence as patriarchal, for integrating ethical-spiritual and political-structural registers, and for being the only explicitly Black feminist voice in the contemporary boy-crisis literature."
};
