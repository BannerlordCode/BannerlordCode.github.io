---
title: "DefaultEncyclopediaSettlementPage"
description: "DefaultEncyclopediaSettlementPage — class in TaleWorlds.CampaignSystem.Encyclopedia.Pages. 9 public members (0 static)."
---

<!-- v147-skeleton -->
# DefaultEncyclopediaSettlementPage

**Namespace:** `TaleWorlds.CampaignSystem.Encyclopedia.Pages`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultEncyclopediaSettlementPage : EncyclopediaPage`  
**Base:** `EncyclopediaPage`  
**Source:** `TaleWorlds.CampaignSystem/Encyclopedia/Pages/DefaultEncyclopediaSettlementPage.cs`

## Overview

`DefaultEncyclopediaSettlementPage` is a named type in the TaleWorlds.CampaignSystem.Encyclopedia.Pages namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends EncyclopediaPage, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `DefaultEncyclopediaSettlementPage`.
- **Instance members** (8): `InitializeListItems`, `InitializeFilterItems`, `InitializeSortControllers`, `GetViewFullyQualifiedName`, `GetName`, `GetDescriptionText`, ….
- **Extension points** (8): `InitializeListItems`, `InitializeFilterItems`, `InitializeSortControllers`, `GetViewFullyQualifiedName`, `GetName`, `GetDescriptionText`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetDescriptionText` | method (override) | Overrides the base member. Takes no arguments. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `GetName` | method (override) | Overrides the base member. Takes no arguments. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `GetStringID` | method (override) | Overrides the base member. Takes no arguments. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetViewFullyQualifiedName` | method (override) | Overrides the base member. Takes no arguments. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `IsValidEncyclopediaItem` | method (override) | Overrides the base member. Takes 1 argument: `object o`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `InitializeFilterItems` | method (override) | Overrides the base member. Takes no arguments. Returns `IEnumerable<EncyclopediaFilterGroup>`. |
| `InitializeListItems` | method (override) | Overrides the base member. Takes no arguments. Returns `IEnumerable<EncyclopediaListItem>`. |
| `InitializeSortControllers` | method (override) | Overrides the base member. Takes no arguments. Returns `IEnumerable<EncyclopediaSortController>`. |
| `DefaultEncyclopediaSettlementPage` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public DefaultEncyclopediaSettlementPage()`.

## Usage Example

```csharp
var defaultEncyclopediaSettlementPage = new DefaultEncyclopediaSettlementPage();
defaultEncyclopediaSettlementPage.InitializeListItems();
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 8 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/Encyclopedia/Pages/DefaultEncyclopediaSettlementPage.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [EncyclopediaListItem](../EncyclopediaListItem/) — `TaleWorlds.CampaignSystem.Encyclopedia`.
- [InformationManager](../../core-extra/InformationManager/) — `TaleWorlds.Library`.
- [EncyclopediaFilterGroup](../EncyclopediaFilterGroup/) — `TaleWorlds.CampaignSystem.Encyclopedia`.
- [EncyclopediaFilterItem](../EncyclopediaFilterItem/) — `TaleWorlds.CampaignSystem.Encyclopedia`.
- [Town](../Town/) — `TaleWorlds.CampaignSystem.Settlements`.
- [MobileParty](../MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [EncyclopediaListItemComparerBase](../EncyclopediaListItemComparerBase/) — `TaleWorlds.CampaignSystem.Encyclopedia`.

Section: [api/campaign/](../) — the other types in this bucket.
