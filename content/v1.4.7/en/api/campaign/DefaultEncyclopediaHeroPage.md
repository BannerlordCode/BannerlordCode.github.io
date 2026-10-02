---
title: "DefaultEncyclopediaHeroPage"
description: "DefaultEncyclopediaHeroPage — class in TaleWorlds.CampaignSystem.Encyclopedia.Pages. 10 public members (0 static)."
---

<!-- v147-skeleton -->
# DefaultEncyclopediaHeroPage

**Namespace:** `TaleWorlds.CampaignSystem.Encyclopedia.Pages`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultEncyclopediaHeroPage : EncyclopediaPage`  
**Base:** `EncyclopediaPage`  
**Source:** `TaleWorlds.CampaignSystem/Encyclopedia/Pages/DefaultEncyclopediaHeroPage.cs`

## Overview

`DefaultEncyclopediaHeroPage` is a named type in the TaleWorlds.CampaignSystem.Encyclopedia.Pages namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends EncyclopediaPage, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `DefaultEncyclopediaHeroPage`.
- **Instance members** (9): `InitializeListItems`, `InitializeFilterItems`, `InitializeSortControllers`, `GetViewFullyQualifiedName`, `GetStringID`, `GetName`, ….
- **Extension points** (9): `InitializeListItems`, `InitializeFilterItems`, `InitializeSortControllers`, `GetViewFullyQualifiedName`, `GetStringID`, `GetName`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetDescriptionText` | method (override) | Overrides the base member. Takes no arguments. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `GetName` | method (override) | Overrides the base member. Takes no arguments. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `GetObject` | method (override) | Overrides the base member. Takes 2 arguments: `string typeName`, `string stringID`. Returns `MBObjectBase`. Read path: prefer it over reaching for the backing store. |
| `GetStringID` | method (override) | Overrides the base member. Takes no arguments. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetViewFullyQualifiedName` | method (override) | Overrides the base member. Takes no arguments. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `IsValidEncyclopediaItem` | method (override) | Overrides the base member. Takes 1 argument: `object o`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `InitializeFilterItems` | method (override) | Overrides the base member. Takes no arguments. Returns `IEnumerable<EncyclopediaFilterGroup>`. |
| `InitializeListItems` | method (override) | Overrides the base member. Takes no arguments. Returns `IEnumerable<EncyclopediaListItem>`. |
| `InitializeSortControllers` | method (override) | Overrides the base member. Takes no arguments. Returns `IEnumerable<EncyclopediaSortController>`. |
| `DefaultEncyclopediaHeroPage` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public DefaultEncyclopediaHeroPage()`.

## Usage Example

```csharp
var defaultEncyclopediaHeroPage = new DefaultEncyclopediaHeroPage();
defaultEncyclopediaHeroPage.InitializeListItems();
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 9 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/Encyclopedia/Pages/DefaultEncyclopediaHeroPage.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [EncyclopediaListItem](../EncyclopediaListItem/) — `TaleWorlds.CampaignSystem.Encyclopedia`.
- [AgeModel](../../campaign-ext/AgeModel/) — `TaleWorlds.CampaignSystem.ComponentInterfaces`.
- [InformationManager](../../core-extra/InformationManager/) — `TaleWorlds.Library`.
- [EncyclopediaFilterGroup](../EncyclopediaFilterGroup/) — `TaleWorlds.CampaignSystem.Encyclopedia`.
- [EncyclopediaFilterItem](../EncyclopediaFilterItem/) — `TaleWorlds.CampaignSystem.Encyclopedia`.
- [CampaignObjectManager](../CampaignObjectManager/) — `TaleWorlds.CampaignSystem`.
- [EncyclopediaListItemComparerBase](../EncyclopediaListItemComparerBase/) — `TaleWorlds.CampaignSystem.Encyclopedia`.

Section: [api/campaign/](../) — the other types in this bucket.
