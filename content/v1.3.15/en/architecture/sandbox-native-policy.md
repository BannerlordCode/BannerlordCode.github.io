---
title: SandBox / StoryMode / Native Reading Policy
description: How to read official content modules and the native layer; what to document and what not to; ties into noise policy to avoid fake deep pages and wrong dependencies.
---

# SandBox / StoryMode / Native Reading Policy

> This site is a **modder handbook**, not a prose dump of every official campaign script and Native export.  
> This page defines: when you hit **SandBox / StoryMode / Native**, what to read, what to write, and what is forbidden.

## One-line role

Separate three surfaces that *look* like business APIs but should not all get generic deep pages, and point readers back to the **managed hubs** they should depend on.

## Three surfaces

| Surface | Typical location | What it is | Site policy |
|---------|------------------|------------|-------------|
| **SandBox** | `SandBox` / `SandBox.View` / `SandBox.GauntletUI` etc. | Official **single-player content implementation** (concrete Issue/Quest classes, menus, dialogs, AI behaviors) | **Learn patterns, copy structure**; do not deep-write every `*Issue`/`*Quest` as a product page (prefer family mental model + exemplars) |
| **StoryMode** | `StoryMode` / `StoryMode.View*` | Official main campaign; strong narrative, strong order | **Study only**; mods generally **should not** treat its internals as stable API |
| **Native** | `TaleWorlds.Native.dll`, `IMB*`, `[EngineMethod]` | Render / physics / scene implementation | **Go through managed wrappers**; see [managed/native interop](../native-interop) and [noise policy](../noise-policy) |

Relation to [noise policy](../noise-policy):

- AutoGen / third-party / platform bridges → **noise** (inventory + backlinks)  
- SandBox/StoryMode **concrete content types** → **content layer** (indexable, family-explainable; no signature-wall fake deep pages)  
- What actually deserves deep pages: **CampaignSystem / MountAndBlade / Engine managed contracts** (Action, Model, Behavior, Mission, Save, UI bases)

## Mental model

```
Your mod (DLL)
    │  should depend on
    ▼
TaleWorlds.CampaignSystem / MountAndBlade / Engine / Library   ← this site's deep-write focus
    │  may reference for "how official does it"
    ▼
SandBox / StoryMode   ← sample tree (churns, couples to narrative)
    │  rarely depend on directly
    ▼
Native (IMB* / EngineMethod)  ← only reach indirectly via managed wrappers
```

| You want to… | Correct entry | Wrong entry |
|--------------|---------------|-------------|
| Add a custom Issue | Inherit [`IssueBase`](../../api/campaign/IssueBase) + `IssueManager` pattern; study one SandBox Issue's structure | Copy-paste entire SandBox Issue namespaces as a "library" |
| Add quest log | [`QuestBase`](../../api/campaign-ext/QuestBase) | Directly edit StoryMode quest classes |
| Change balance formulas | [`GameModels`](../../api/campaign-ext/GameModels) / [Campaign API](../../api/campaign-ext/) | Treat a local constant in one SandBox call site as sole truth |
| Change world state | [`*Action.Apply`](../../api/campaign-ext/actions-index) | Copy "mutate fields casually" habits from SandBox Behaviors |
| Touch scene / camera | `Mission` / `Scene` / Engine managed API | Direct P/Invoke Native |
| Learn dialog / menu | [`DialogFlow`](../../api/campaign-ext/DialogFlow) · [`GameMenu`](../../api/campaign-ext/GameMenu) + SandBox samples | Treat Gauntlet prefabs as C# API |

## When to read SandBox source

**Do read:**

1. How official code does `RegisterEvents` / `AddDialogFlow` / `AddGameMenu`  
2. State-machine splits for a play style (bandits, caravans, noble needs): Issue ↔ Quest ↔ Menu  
3. Real call order into `*Action` / `Campaign.Current.Models`  

**Take away:** patterns and call chains — not "SandBox type name = public SDK".

## Runnable SandBox chain

The following is the smallest source-backed chain to trace before adding a
single-player feature. The implementation classes live in the v1.4.5 source
bundle under `Bannerlord.Source/Modules.SandBox`; the managed contracts linked
below are the stable v1.3.15 mod surface.

1. The module enters `MBSubModuleBase.OnGameStart` and receives an
   `IGameStarter`.
2. For a campaign start, cast to `CampaignGameStarter` and call
   `AddBehavior` once. The behavior implements `RegisterEvents` and
   `SyncData(IDataStore)`.
3. Register a `DialogFlow` or `GameMenu` from that behavior. Conditions only
   decide whether an option is visible; the consequence callback performs one
   documented `*Action.Apply` mutation.
4. If a calculation must be replaced, call `AddModel` during game-start
   registration. Consumers read the replacement through `Campaign.Current.Models`.
5. A screen or mission creates its `ViewModel`, attaches a
   `GauntletLayer`, and releases both from `OnFinalize`/screen teardown.

```csharp
protected override void OnGameStart(Game game, IGameStarter starter)
{
    if (game.GameType is Campaign)
    {
        var campaignStarter = (CampaignGameStarter)starter;
        campaignStarter.AddBehavior(new AgingCampaignBehavior());
        campaignStarter.AddModel(new DefaultDiplomacyModel());
    }
}
```

The two types above are real SandBox implementations; a mod normally supplies
its own behavior or model subclass at the same registration point. The
registration methods and lifecycle are the important contract. Read the
[CampaignBehaviorBase](../../api/campaign-ext/CampaignBehaviorBase),
[CampaignGameStarter](../../api/campaign-ext/CampaignGameStarter),
[DialogFlow](../../api/campaign-ext/DialogFlow),
[GameMenu](../../api/campaign-ext/GameMenu),
[GameModels](../../api/campaign-ext/GameModels), and
[GauntletLayer](../../api/engine/GauntletLayer) pages together. Do not copy a
SandBox private class as a public API or call `Campaign.Current` before a
campaign exists.

**Don't:**

- Document SandBox `internal` / tightly coupled types as stable public API in mod docs  
- Generate signature-wall deep pages for every `LordNeedsXIssue` and count them as R1 "business handwritten" completion (use family pages + exemplar deep pages)  
- Paste long `using` lists of StoryMode-only types as the default sample path  

## When to read StoryMode

| Scenario | Advice |
|----------|--------|
| Understand how mainline locks progress / special quests | Read only related Quest/Issue; map to `QuestBase` mental model |
| Write a mainline-compatible mod | Subscribe public `CampaignEvents`; avoid hooking private mainline fields |
| Write a fully custom campaign | **Do not** use StoryMode as framework; CampaignSystem + your own Behaviors |

StoryMode **can change heavily between versions**; deep-page priority is lower than Campaign hubs.

## When to touch Native

See [native-interop](../native-interop). Summary:

1. Default: call only **managed** `TaleWorlds.Engine` / `MountAndBlade`  
2. Thin `IMB*` wrappers → [noise policy](../noise-policy): inventory, no fake long prose  
3. When comparing decompiles: `native-1.3.15/` / `native-1.4.5/` and on-site [native-1.3.15-src](../../native-1.3.15-src/)  

The native provenance map is intentionally narrow:

| Boundary | Evidence to inspect | Managed hand-off |
| --- | --- | --- |
| Startup exports | `native-1.3.15-src/exports-and-bridge` (`WotsMain*`, `pass_managed_*`) | `MBDotNet` and `LibraryApplicationInterface` |
| Engine callbacks | `native-1.3.15-src/engine-core` (`ftdnNative_*`, callback tables) | `TaleWorlds.Engine` wrappers and `[EngineMethod]` interfaces |
| Mission/scene bridge | `native-1.3.15-src/mission` and `scene` | `Mission`, `Scene`, `Agent`, and managed mission behaviors |
| Rendering/physics | `native-1.3.15-src/rendering` and `physics` | Engine managed objects; never direct P/Invoke from a campaign behavior |

`IMB*` and `[EngineMethod]` names are provenance anchors, not a promise that
the native DLL is a supported mod ABI. Version-specific addresses must stay in
the native source reference and must never be presented as stable managed
entry points.

## On-site presentation rules (mandatory)

1. **Hubs first:** Issue / Quest / Menu / Dialog / Action / Model / Mission / Save / UI bases must have handwritten deep or family pages.  
2. **SandBox content types:**  
   - Allowed: family index, 1–N **representative** deep pages (teach patterns)  
   - Forbidden: bulk-generate "looks like docs" overviews for every `*Issue`/`*Quest`  
3. **StoryMode:** default inventory + backlink to this policy; short notes only for high-frequency cross-mod concepts.  
4. **Native / IMB*:** noise policy; interop rules in native-interop.  
5. **R1 coverage:** SandBox long-tail content types may use **family_entry** coverage; individual deep_pass not required per type — but they **must not silently vanish**.

## Link to development tasks

| Task | Read first | Then check SandBox |
|------|------------|--------------------|
| Custom commission | [IssueBase](../../api/campaign/IssueBase) · [QuestBase](../../api/campaign-ext/QuestBase) | Any official Issue's `GenerateIssueQuest` |
| Dialog tree | [DialogFlow](../../api/campaign-ext/DialogFlow) · [ConversationManager](../../api/campaign-ext/ConversationManager) | SandBox dialog registration |
| Game menu | [GameMenu](../../api/campaign-ext/GameMenu) · [MenuContext](../../api/campaign-ext/MenuContext) | Town / encounter menus |
| UI | [ViewModel](../../api/core-extra/ViewModel) · [ScreenManager](../../api/gui/ScreenManager) · [GauntletLayer](../../api/engine/GauntletLayer) | How SandBox.GauntletUI mounts |
| Crash boundaries | [crash-boundaries](../crash-boundaries) | Official also uses Action — learn the boundary, not "skip events" |

## Maintenance notes

- When scanning new assemblies: classify `SandBox*` / `StoryMode*` / `*Native*` / `IMB*`.  
- If generators produce fake deep pages for content types: treat as stubs; do not count as done.  
- English transfer carries the **same policy** — no competing rule set.  
- When adding exemplar deep pages: link one "example" entry here or on the roadmap; do not expand the whole SandBox tree in prose.

## ↑ Parent Navigation

- [Architecture overview](./)  
- [Doc contract](../doc-contract)  
- [SDK overview](../sdk-overview)

## ↔ Sibling Navigation

| Page | Relation |
|------|----------|
| [Noise and non-business type policy](../noise-policy) | AutoGen / third-party / platform / IMB* |
| [Managed/native interop](../native-interop) | EngineMethod boundary |
| [Developer task roadmap](../developer-roadmap) | Task entries link only business hubs |
| [Crash and save boundaries](../crash-boundaries) | Content layer still obeys Action/Save rules |
| [Module system](../module-system) | How your DLL hooks in — not how to fork SandBox |

## See also

- [QuestBase](../../api/campaign-ext/QuestBase) · [IssueBase](../../api/campaign/IssueBase)  
- [Actions family](../../api/campaign-ext/actions-index) · [Campaign API](../../api/campaign-ext/)
- [CampaignEvents](../../api/campaign-ext/CampaignEvents) · [CampaignEventReceiver](../../api/campaign-ext/CampaignEventReceiver)  
