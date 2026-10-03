# Full-tree anti-fabrication audit — `content/` (39,013 pages)

**Author:** worker-60 · **Target trees:** `bannerlord-1.3.0`, `-1.3.15`, `-1.4.5`, `-1.4.6`, `-1.4.7`, `-1.5.3`
**Artifacts:** `tools/_audit_fabrication_fulltree.md` (this file), `tools/_audit_fabrication_fulltree.jsonl` (**1,739 rows, one per page** with ≥1 unresolved identifier).
**Method:** my own sweep. I did **not** use `_review_batch_check.mjs` — it was mid-edit and failed to load mid-run (`ReferenceError: Cannot access 'rows' before initialization`, line 251). Nothing under `content/**` was modified; this is a survey.

---

## 1. THE FOUR BUCKET COUNTS (site-wide)

**MEASURED.** Page-level (a page is labelled by its worst bucket, A > B > D > C):

| bucket | meaning | **pages** | (page,identifier) pairs |
|---|---|---:|---:|
| **A fabricated** | asserted as this version's engine API, absent from all six trees, not framed as a difference | **1,434** | 2,738 |
| **B cross_version** | absent in the target tree but either framed as a version difference, or absent only because that assembly ships no source in that tree | **22** | 35 |
| **C example_local** | declared inside the page's own example | **224** | 359 |
| **D suspect** | cannot be classified mechanically — needs a human | **59** | 136 |
| | **total pages with ≥1 unresolved identifier** | **1,739** | 3,268 |

Sweep coverage (MEASURED): 39,013 `.md` read · 38,453 contain ≥1 `csharp` block · 38,434 of those sit in a version tree (`versions/` and `_index.md`, 19 files, have no target tree and were skipped).

**Bucket A sub-split — this matters for what you do next.** Of the 2,738 bucket-A pairs:

- **A-engine (1,447)** — names that read as engine API. This is the actionable set.
- **A-example (1,291)** — author-helper names (`MyMod`, `MyCampaignBehavior`, `MyMissionBehavior`, `MyModule`, `Test*`, `Sample*`) that are **not declared in the page**. They are not fabricated *engine* API; they are undefined example types. Reported separately rather than folded into A-engine.

---

## 2. THE HEADLINE FINDING: `Game.Current.ReplaceModel<T>()` does not exist

**1,083 (page,identifier) pairs — by far the largest single signal in this audit.**

Verbatim, from `content/v1.3.0/en/api/campaign/DefaultAgeModel.md:49`:

```csharp
Game.Current.ReplaceModel<DefaultAgeModel>(new MyDefaultAgeModel());
```

**MEASURED absence:** `ReplaceModel` occurs in **zero** `.cs` files across **all six** trees (0/0/0/0/0/0 files containing the string).

**Positive control that the probe can see it if it existed** — `Game.cs` in 1.3.0 is 466 lines and its full public surface was enumerated; `ReplaceModel` is not among the 40+ members (`TaleWorlds.Core/Game.cs:14` declares `public sealed class Game : IGameStateManagerOwner`).

**Citation that disproves it — the API that actually does this:**
- `TaleWorlds.Core/Game.cs:45` — `public T AddGameModelsManager<T>(IEnumerable<GameModel> inputComponents) where T : GameModelsManager`
- `TaleWorlds.Core/Game.cs:328` — `public void SetBasicModels(IEnumerable<GameModel> models)`
- `BasicGameStarter.cs:34` (1.4.5) — `public void AddModel<T>(MBGameModel<T> gameModel) where T : GameModel`

The documented replacement path is `IGameStarter.AddModel<T>(MBGameModel<T>)` inside `MBSubModuleBase.InitializeGameStarter`, which wraps the previously-registered model via `BaseModel`. There is no `Game.Current.ReplaceModel` in any version.

**Where it lives:** 1,151 of the affected pages still carry the generation marker — see §5.

### Other bucket-A fabrications, with citations

**`SetViewModel` — 66 pairs.** Verbatim, `content/v1.3.0/en/api/core-extra/BannerViewModel.md:33`:
```csharp
movie.SetViewModel(vm);
```
`GauntletMovie`'s entire public surface in 1.3.0 (`TaleWorlds.GauntletUI.Data/GauntletMovie.cs:10`) contains **no** `SetViewModel`. The real method is **`GauntletMovie.cs:88` — `public void RefreshDataSource(IViewModel dataSourve)`**. This is exactly the "body right, name wrong" class the brief flagged (`IsAttacking`).

**Fabrications on CLEAN, unmarked pages** (no marker → nobody knows) — 283 pages total. Verified absent from all six trees:

| identifier | citation of what is real instead |
|---|---|
| `GetAgents` | `TaleWorlds.MountAndBlade/Mission.cs:6614` — `public MBList<Agent> GetNearbyAgents(Vec2, float, MBList<Agent>)` |
| `FindNearestTown` | no `Settlement.Find*` member exists in any tree; nearest-name matches are `FindHideoutTutorialQuest`, `FindMostDangerousThreat` |
| `ShowPopup`, `InformationExtension` | `TaleWorlds.Library/InformationManager.cs:6` (class) and `MBInformationManager.AddQuickInformation` (method) |
| `Languages` | real members are `LanguageData`, `GetCurrentLanguage`, `GetSystemLanguage` |
| `SetMoveHold` | **zero occurrences anywhere**, all six trees |
| `ForceEvent` | absent from all six |

Affected clean pages include `content/v1.3.0/en/guide/campaign-basics.md` (`Settlement.FindNearestTown`), `content/v1.3.0/en/guide/mission-basics.md` (`Mission.Current.GetAgents()`), `content/v1.3.0/en/guide/ui-basics.md` (`GauntletMovieManager`, `OnCreate`).

The per-page machine-readable list — every path, every identifier, the bucket, whether the page is marker-carrying, and the code-block line — is in `tools/_audit_fabrication_fulltree.jsonl`. I am not transcribing 1,434 pages into prose; the jsonl is the inventory.

---

## 3. BUCKET B — cross-version, 22 pages

Mostly **assembly-coverage gaps, not authoring errors.** `content/v1.3.0/en/api/campaign/MobileParty.md` flags `MBObjectManager`, which is real — it lives in `TaleWorlds.ObjectSystem`, and **1.3.0 ships no source for that assembly at all**.

Measured assembly coverage (MEASURED): assemblies shipping as source — 1.3.0 = **17**, 1.3.15 = 26, 1.4.5 = 26, 1.4.6/1.4.7/1.5.3 = 28.

Ten assemblies present in every tree except 1.3.0: `TaleWorlds.DotNet`, `NavigationSystem`, `Network`, **`ObjectSystem`**, `PSAI`, `PlatformService`, `PlayerServices`, **`SaveSystem`**, `ScreenSystem`, `TwoDimension`.

**This is the single most important caveat in the report:** for a v1.3.0 page, absence from the 1.3.0 tree is *not* evidence of fabrication for anything in those ten assemblies. `MBObjectManager.cs` is physically absent from `bannerlord-1.3.0` yet the class is used 508 times there.

Also in B: `RegisterPresumedObject`, `Mathf`, `GetObjectTypeList`, `SetInputRestrictions`, `ScreenManager`, `SaveableProperty` (1.3.0 pages using the SaveSystem attributes — absent from 1.3.0, correct there, framing-dependent).

---

## 4. BUCKET D — 59 pages I could not classify

Reported rather than guessed, as instructed. Reasons:

1. **Absent in the target tree, present in another, with no cross-version framing** (28 pages on clean pages, 31 on marker pages). Either the page forgot to say "this is 1.3.15+", or the tree is simply incomplete — I cannot tell which without reading each page.
2. **Namespaces and partial-type spellings my segment harvest did not cover**, e.g. `CampaignMissionComponent`, `SandBoxMissions`, `CustomBattleVM` — these look like types but could be namespace tails.
3. **BCL/utility names not in my allowlist**: `WriteAllBytes`, `LayoutKind`, `ToCharArray`, `GetDelegateForFunctionPointer`, `Sleep`, `SubModule`, `cs`.

The single biggest driver of D is identifier 1: I did not read these 59 pages. **They are queued, not dismissed.**

---

## 5. PAGES CARRYING THE MARKER — listed separately, as instructed

**MEASURED: 36,247 of 39,013 pages still contain an exact marker string** (`的自动生成类参考` / `Auto-generated class reference` / `的自动生成战役动作参考` / `Auto-generated campaign action reference`).

| tree | pages with exact marker |
|---|---:|
| v1.3.0 | 10,183 |
| v1.3.15 | 10,619 |
| v1.4.5 | 15,445 |
| v1.4.6 / v1.4.7 / v1.5.3 / versions | 0 |

**These are a different problem from fabrication and I have kept them out of the buckets above.** Their content is machine-written, so "is this API real?" is a secondary question — the primary one is that they should not be in the tree at all.

Marker split of the fabrication findings (MEASURED):

| bucket | on marker pages | on clean pages |
|---|---:|---:|
| A | **1,151** | **283** |
| B | 0 | 22 |
| C | 0 | 224 |
| D | 31 | 28 |
| total | 1,182 | 557 |

**Read this as two separate work items.** 1,151 pages are generated pages whose examples call a fabricated `ReplaceModel` — fixing the examples is pointless; the pages need withdrawing or rewriting. **283 pages are unmarked pages asserting non-existent engine API, and those are the genuinely dangerous ones**: they look authored, they are inside the 557-page clean set nobody has classified, and a modder copying `Settlement.FindNearestTown` gets a compile error with no marker to warn them.

Marker check used the **four exact strings only**. I did not use a broad `/自动生成|auto-?generated/i` pattern, which would also match hand-written pages *about* generation (e.g. `architecture/noise-policy.md`).

---

## 6. PROBE COVERAGE CHECKLIST — the five member classes

Every version was indexed across all five member classes plus C# attribute short-forms. Counts are **distinct declared names** per class per tree (MEASURED):

| tree | `.cs` | types (class/interface/struct/enum/delegate) | **methods** | **properties** | **fields** | **enum members** | **delegates** | union |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| 1.3.0 | 4,587 | 5,442 | 21,850 | 11,471 | 17,400 | 3,855 | 159 | 55,544 |
| 1.3.15 | 5,196 | 5,922 | 24,281 | 13,358 | 19,218 | 6,897 | 2,523 | 64,873 |
| 1.4.5 | 8,572 | 9,481 | 52,060 | 14,196 | 32,581 | 13,499 | 2,690 | 110,370 |
| 1.4.6 | 11,376 | 12,482 | 59,091 | 20,294 | 36,823 | 11,919 | 2,728 | 130,859 |
| 1.4.7 | 11,378 | 12,484 | 59,103 | 20,296 | 36,829 | 11,919 | 2,728 | 130,880 |
| 1.5.3 | 11,478 | 12,606 | 59,805 | 20,570 | 37,739 | 11,609 | 2,724 | 132,459 |

Plus **attribute short-forms** added so `[SaveableField]` binds to `SaveableFieldAttribute`: +49 / +56 / +105 / +297 / +297 / +300.

**Positive control, 18 symbols each checked against its expected member class:** 16/18 passed on the final probe. The 2 failures were **my own bad control choices**, not probe failures — `RollCount` (a page's example method, correctly absent) and `MqnbMode` (a name I invented). An 8-symbol control on the final index passed 7/8; the failure was `LocalizationManager`, which is a **known residual gap** (see §7.6).

**Negative control** — these must be absent from all six trees, and are: `MissionBehaviorBase`, `TryRestore`, `IsAttacking`, `ReplaceModel`, `SetViewModel`, `FindNearestTown`, `GetAgents`, `SetMoveHold`, `ShowPopup`, `InformationExtension`, `ForceEvent`, `Languages`. **All confirmed absent from all six.**

---

## 7. MY OWN ERRORS, BY NAME

Six. Each one produced a *wrong* bucket before I caught it. This is the part I would most want a second worker to check.

**7.1 — I dropped every property in my first probe.** My member regex required `(` in the declaration line, so `public abstract int NumberOfMaximumHideoutsAtEachBanditFaction { get; }` was invisible. In review round 1 this made me nearly reject `BanditDensityModel.md` for "having 4 members where it claims 13". Fixed in §6's v2 probe: 1.3.0 properties 3,562 → 11,010.

**7.2 — I dropped every field whose initialiser contained `(`.** My filter rejected any line containing `(`, so `public List<AgentSaveData> CorpseList = new List<AgentSaveData>();` was missed. Caught by the positive control failing on `CorpseList` (11/12). Fixed: +1,259 to +2,362 fields per tree.

**7.3 — I missed decompiler-split properties.** `public static Hero MainHero` followed by `{ get … }` on the *next* line was invisible to a same-line regex, which flagged `MainHero`, `DailyTickEvent`, `PlayerClan` as unresolved on hundreds of correct pages. Caught because `MainHero` obviously exists and my sweep said otherwise. Fixed: 1.3.0 properties 11,010 → 11,471.

**7.4 — I missed `private protected` and generics containing spaces.** `private protected T BaseModel { … }` failed a single-access-modifier regex, and `IMbEvent<Hero, Hero, KillCharacterAction.KillCharacterActionDetail, bool> HeroKilledEvent` failed a char-class that excluded spaces inside `<>`. Both flagged real members as absent. Caught by controls on `BaseModel` and `HeroKilledEvent` (13/15 → 16/18).

**7.5 — I missed C# attribute suffix-stripping.** `[SaveableField(1)]` binds to `SaveableFieldAttribute`; I indexed only the long form, so `SaveableField`/`SaveableProperty`/`SaveableRootClass` (74 pairs) were about to be reported as fabrications on four trees where they are real. Caught by control. Fixed by adding +49…+300 short forms per tree.

**7.6 — I polluted buckets with namespaces and LINQ, twice.** First I hand-listed namespaces and missed *segments* (`CampaignSystem`, `MountAndBlade`, `Core`) — 774 pairs of pure noise landed in bucket A. Then I overwrote my BCL list and dropped LINQ, putting `FirstOrDefault` (145), `Where` (35), `OfType` (19) into bucket A. Fixed by harvesting all namespace segments from source (457) and restoring a full BCL/LINQ list. **Bucket A fell 3,005 → 2,738 and its top entry stopped being `CampaignSystem`.**

**7.7 — I published a wrong marker split and caught it.** My first page-level rollup printed "0 bucket-A pages on marker pages" while the pair-level rollup said 2,234. The data was right; the display read a key (`p.marker`) that the page rows did not carry. Corrected: **1,151** marker / **283** clean. I am recording this because the first number would have inverted the conclusion of §5.

**Residual, unfixed:** the control on `LocalizationManager` still fails, so my index has at least one more gap of unknown shape. Its consequence is bounded — a gap can only create *false absences*, which inflate bucket A. **Bucket A is therefore an upper bound, not a point estimate.**

---

## 8. WHAT I COULD NOT DETERMINE

1. **I did not read the pages.** This is a mechanical sweep plus targeted verification of the highest-signal identifiers. Bucket A is "absent + unframed", which is strong evidence but not proof for all 1,434 pages.
2. **Bucket D (59 pages) is unresolved on purpose** — see §4.
3. **The `A-example` split (1,291 pairs) is heuristic** — it keys on a `My*`/`Test*`/`Sample*` prefix, not on reading each page.
4. **Cross-version framing detection is structural**: I treat a code block as "framed" if it sits after a heading matching 跨版本/Cross-Version/Version Delta. A page that frames a difference in prose *without* such a heading would be misfiled as bucket A.
5. **The source trees are incomplete**, and unevenly so (§3). This bounds what "absent" can mean, and it means 1.3.0 verdicts are the least reliable of the six.
6. **No compilation.** Every verdict is from declared signatures and types.

## 9. DISCIPLINE

- **MEASURED** = produced by a command over the source trees or the page files; repeatable.
- **INFERRED** = my judgement, chiefly the A-engine / A-example split and the framing test.
- **Per the brief's discipline**: if a number looked surprisingly clean *and* matched what I expected, I treated it as broken first. That is exactly how errors 7.1–7.6 were found — each time, a result I wanted to believe was contradicted by a symbol I already knew existed.
- **Files I created:** `tools/_audit_fabrication_fulltree.md`, `tools/_audit_fabrication_fulltree.jsonl`. Nothing else. Intermediate indexes were cached outside the repo (OS temp).