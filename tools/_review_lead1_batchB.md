# Review — lead-1 batch B (`content/v1.3.0/zh/api/core-extra/`)

**Reviewer:** worker-60 · **Half:** items 26–43 of the sorted modified-file list
**Artifacts:** `tools/_review_lead1_batchB.jsonl` (18 rows), this report.
**Read-only under `content/**`.** Rejection is a report, not an edit. No git operations, no zola build.

---

## THE THREE REQUIRED NUMBERS

### 1. N pages reviewed, M wrong

**18 pages reviewed. 1 wrong.**

| error class | count |
|---|---:|
| `fabricated_name` | 0 |
| `semantic` | **1** |
| `format` | 0 |
| `link` | 0 |
| **total wrong** | **1** |

**Scope correction, stated up front:** the brief described "50 modified files, pages 26-50". The actual batch is **43 modified files**, so my half is **26–43 = 18 pages**, not 25. I took the sorted list from `git status --porcelain -- content/v1.3.0/zh/api/core-extra/` and took `slice(25)` → items 26–43. I did not read items 1–25 (worker-55's).

**MEASURED mechanical gates — all 18 clean:**

| gate | result |
|---|---|
| `_check_deep` status | **18/18 `deep_pass`** |
| generation self-declaration (4 dialects) | **0/18** — none carry any |
| ≥1 code block | **18/18** (range 3–13; total 113 csharp blocks) |
| FABRICATED (names absent from 1.3.0 source) | **0** for these 18 pages |

On the FABRICATED count specifically: the anti-fabrication tool's output is site-global and includes other lines' pages. I did **not** quote it. I rebuilt the declared-name set from `C:/WorkSpace/Bannerlord/bannerlord-1.3.0` (4,572 `.cs` files, 21,942 distinct declarations) and checked only my 18 pages. 69 identifiers initially flagged, of which 66 were namespace fragments (`TaleWorlds`, `System`, `Collections`, `Math`, `Weapons`, `Models`) or the author's own example-holder types, and 3 were zero-hit — all 3 investigated below and all 3 legitimate.

*(Positive control caveat: the tool's own control names `AddBehavior`/`SyncData` resolved but `PushScreen` does not exist in 1.3.0 — it is 1.3.15+. The gate is therefore partially vacuous for 1.3.0 and I treated it as a triage hint, not evidence.)*

### 2. Errors the gates caught but the author had not already fixed

**Zero. No page in this half was rejected on a gate finding.**

This is the honest result, and I checked it specifically: every gate signal resolved to a false positive on closer reading (documented in §3). I did not manufacture a gate catch to fill this section.

### 3. Errors NO gate caught that only human reading found

**ONE. This is the number that decides whether more gates get added.**

#### REJECT — `content/v1.3.0/zh/api/core-extra/Vec2.md` — error class `semantic`

The page's 关键成员 table correctly documents the method:

> `| \`RotateCCW\` | \`public void RotateCCW(float angleInRadians)\` | 就地逆时针旋转。…`  (line 67)

But the 真实示例 example then **assigns its result**:

```csharp
this._currentFacing = this._currentFacing.RotateCCW(-MathF.Min(MathF.Abs(angleDifference), maxTurnRadians) * MathF.Sign(angleDifference));
```

`RotateCCW` returns **`void`** and mutates in place. Assigning a `void` call to a `Vec2` field is a **C# compile error**. The page therefore contradicts itself between its table and its code.

**Source citation that disproves it — `TaleWorlds.Library/Vec2.cs:230`:**

```csharp
public void RotateCCW(float angleInRadians)
{
    float num; float num2;
    MathF.SinCos(angleInRadians, out num, out num2);
    float num3 = this.x * num2 - this.y * num;
    this.y = this.y * num2 + this.x * num;
    this.x = num3;
}
```

**Corroboration:** `RotateCCW` occurs **32 times in 1.3.0** and has exactly **one declaration**. All 31 call sites use it as a bare statement and never assign it — e.g. `SandBox/MapScene.cs:310` → `vec.RotateCCW(0.7853982f * (float)i);`, `TaleWorlds.CampaignSystem/Helpers/NavigationHelper.cs:137` → `v.RotateCCW(0.05f);`.

**Fix for lead-1:** delete the assignment —
```csharp
this._currentFacing.RotateCCW(-MathF.Min(MathF.Abs(angleDifference), maxTurnRadians) * MathF.Sign(angleDifference));
```

**Why every gate missed it — this is the important part:**
- `grep -w RotateCCW` → **PASSES**. The name exists.
- `deep_pass` → **PASSES**. The page has 3 structure reasons satisfied (`mental>80`, `dep-or-see-links=6`, `real-csharp-example`, `overview-ok`).
- Anti-fabrication → **PASSES**. Every identifier in the example is a real declared name.
- Link check → **PASSES**. Nothing to link.
- **The official `tools/_review_batch_check.mjs` harness → PASSES.** I ran it over exactly my 18 pages and it returned `{"pass": 18, "fail": 0, "failing": []}` with `deep: deep_pass`, `fab.count: 0`, `markerOk: true` and empty `fails` for every page — **including Vec2.md**. This is measured, not inferred: the harness has no check for return-type/arity, so it cannot see that a `void` call is being assigned.

That last point is the load-bearing one for your gate question: the newest, purpose-built harness for this review line does not catch it either.

The gate class that would have caught this is **signature-arity / return-type checking**: extract the declared return type of each called member and flag any call whose result is used in an assignment, argument, or expression context. That is a mechanical check and it is cheap. **I recommend it be added** — this is the one concrete gate change this batch justifies.

---

## THREE GATE FALSE-POSITIVES THAT HUMAN READING RESOLVED

These are worth recording because they are the strongest argument for keeping a human in this loop. In each case a mechanical "does this name exist in the target version" check fires, and the page turns out to be **right**.

**a) `ItemModifier.md` — `IsBeneficial` has ZERO occurrences in 1.3.0.**
The page does not claim it exists in 1.3.0. It files it under 跨版本提示 and says explicitly:
> `**1.3.0 与 1.3.15 都没有**` ("neither 1.3.0 nor 1.3.15 has it")

Verified across all six trees: **10501 bytes without it in 1.3.0/1.3.15; 10750 bytes with it in 1.4.6/1.4.7/1.5.3**, body byte-identical to what the page quotes. The page is right; the grep is naive.

**b) `WeaponDesign.md` — a 4-argument constructor that does not exist in 1.3.0.**
`public WeaponDesign(CraftingTemplate, TextObject, WeaponDesignElement[], string customId = null)` and `SetWeaponName` are both absent from 1.3.0. Again the page is documenting a version boundary, and correctly: 1.3.0 = 11957 bytes / 3-param ctor only / no `SetWeaponName`; 1.4.6+ = 11515 bytes / 4-param + `SetWeaponName`. Verified across all five trees.

**c) `GameModel.md`, `GameModelsManager.md`, `MBGameModel.md`, `MBMath.md` — `RollLootCount`, `RollCount`, `ApplyThemeMix`.**
Zero hits in 1.3.0 source, but all three are the author's own example-holder methods, and each page marks them so in-line, e.g.:
> `// 下面是本示例自己声明的方法，不是 MBMath 的成员` ("what follows is declared by this example, not an MBMath member")

A name-existence gate cannot see that distinction. **All four pages would have been wrongly rejected.**

---

## MINOR ACCURACY OBSERVATIONS (recorded, not rejected)

Neither of these rises to rejection; both are noted so the record is complete.

1. **`MBMath.md`** claims "约 80 个 public 成员" in the frontmatter and body. **MEASURED: exactly 66** (59 methods + 7 consts). That is a ~21% overstatement, but it is hedged with 约 ("approximately") and is inside ordinary tolerance for that hedge. Every line/byte claim on the page is exact (1021 lines / 29928 bytes — both confirmed).
2. **`WeaponDesign.md`** groups `1.3.15 / 1.4.6 / 1.4.7 / 1.5.3` as "359 行 / 11515 字节". **MEASURED: 1.3.15 is 11525 bytes**, the other three are 11515. A 10-byte mis-grouping in a parenthetical; the load-bearing claim (1.3.15 gained the 4-param ctor and `SetWeaponName`) is correct.

I explicitly did **not** reject on either, because rejecting a 26.24KB page with one hedged number off by 14 would be manufacturing rigor rather than exercising it.

---

## WHAT I VERIFIED (so the pass verdicts are not empty)

For the 17 passes I cite source, not impressions. Representative confirmations:

| page | source confirmations |
|---|---|
| `GameModel` | `GameModel.cs` = only `public abstract class GameModel { }`, zero members |
| `GameModelsManager` | 1006 bytes exact; quoted reverse-scan loop matches `GameModelsManager.cs:15-26` verbatim |
| `MBGameModel` | 579 bytes exact; `private protected T BaseModel { protected get; private set; }` at `:12` |
| `MBMath` | 1021 lines / 29928 bytes exact; `TopologySort` at `:953` |
| `GameStateManager` | `RegisterListener:109`, `UnregisterListener:120`, `Register/UnregisterActiveStateDisableRequest:143/152`, `LastOrDefault<T>:175`, `CreateState<T>(params object[]):189`, `PushState:235`; `IGameStateManagerListener` declares exactly the 5 methods the example implements |
| `ItemObject` | `InitializeTradeGood` 8-param signature **and order** exact at `ItemObject.cs:471` |
| `MBBindingList` | `RemoveItem:54`, `Sort:94`, `IsOrdered:104`, `ApplyActionOnAllItems:117`, `OnListChanged:75` |
| `MBStringBuilder` | is a **`public struct`** (`:8`) — which is exactly why the examples use `default(...)` |
| `PropertyOwner` | `PropertyOwner<T> : IReadOnlyPropertyOwner<T> where T : MBObjectBase` at `:11`; page's citation **`Hero.cs:1761` is exact** |
| `SkillObject` | `Initialize(TextObject,TextObject,CharacterAttribute[])` at `:40`; `HowToLearnSkillText` at `:50` |
| `Vec3` | 4-arg ctor `Vec3(float x,float y,float z,float w=-1f)` at `:42` — the batch's highest fabrication risk, and genuine |
| `ViewModel` | `GetPropertyValue:439`, `GetPropertyType:451`, `SetPropertyValue:462`, `ExecuteCommand:485`, `GetViewModelAtPath:381`, `SetField:237`, `OnPropertyChanged:249` |
| `WeaponComponent` | `FillWeapon(ItemObject,WeaponDescription,WeaponFlags,bool,out WeaponComponentData)` at `Crafting.cs:719` — params **and** `out` match |
| `WeaponDesign` | ctor body order `:159→160→161→166` matches the page's block 1 exactly |

---

## WHAT I COULD NOT DETERMINE

1. **Whether the `Vec2.md` defect is isolated.** I read one example block per page plus its prose. `RotateCCW` is the only assignment-of-a-void-call I found in my 18, but a full re-read of every code block on these pages could surface siblings. My read was thorough, not exhaustive.
2. **Compile-verification.** No build was run and none is permitted. The `RotateCCW` finding is derived from the declared return type, which is conclusive for this case, but I did not machine-confirm the compiler error text.
3. **Factual correctness of prose claims I did not spot-check.** I verified signatures, member existence, byte/line counts, and cross-version boundaries. I did not audit every behavioural assertion (e.g. MBMath's claim that four-to-eight members have zero call sites) — those were read and judged plausible, not exhaustively re-derived.
4. **Pages 1–25.** Out of my half; not read, not judged.
5. **The `-1006` byte discrepancy is my own measurement convention** (`split(/\r?\n/).length` counts the trailing newline). The pages use the same convention, so the comparison is apples-to-apples.

## DISCIPLINE NOTE

- **MEASURED** = read out of the source tree or out of the page file by a command, repeatable.
- **INFERRED** = my judgement of whether a documented fact is correct or misleading.
- One rejection only, and it carries a `File.cs:230` citation. **I did not reject anything else, and I checked each candidate gate signal individually rather than accepting the first plausible-looking fault.**

## CROSS-CHECK AGAINST THE OFFICIAL HARNESS

`tools/_review_batch_check.mjs` did not exist when I started, so I ran the three checks by hand against `bannerlord-1.3.0`. It appeared mid-review (mtime 15:00:31, five minutes before my first write) and I re-ran it over exactly my 18 pages as an independent cross-check.

**MEASURED harness result: `{"pass": 18, "fail": 0, "failing": []}`** — it agrees with my hand-run gates on every page (`deep_pass` 18/18, `fab.count: 0` on all, `markerOk: true` on all). I also saw `readerOwned` populated on pages whose zero-hit identifiers are the author's own example types, which is the harness handling case (c) in §3 correctly.

Two caveats, both mine to own:
- **The harness is transiently broken as of this writing** — it now exits with `ReferenceError: Cannot access 'rows' before initialization` at `_review_batch_check.mjs:251`, because its owner is editing it while I run. I did not modify it. My harness evidence is the complete successful run above.
- My deliverables were written at 15:05/15:06; the batch files' newest mtime is 04:41:49Z, i.e. **before** I began. Combined with the fact that every operation I issued against `content/**` was a read (`readFileSync`, `git status`), I wrote nothing under `content/**`.

**Files I created, complete list:** `tools/_review_lead1_batchB.jsonl` and `tools/_review_lead1_batchB.md`. I briefly wrote one scratch index (`tools/_review_declared_5.json`) while building the declared-name set and **deleted it**; no other stray file of mine remains in `tools/`.