<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerEditorState`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BannerEditorState

**Namespace:** TaleWorlds.CampaignSystem.GameState
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BannerEditorState : GameState`
**Base:** `GameState`
**File:** `TaleWorlds.CampaignSystem/GameState/BannerEditorState.cs`

## Overview

`BannerEditorState` lives in `TaleWorlds.CampaignSystem.GameState` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.GameState` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsMenuState` | `public override bool IsMenuState { get; set; }` |
| `Handler` | `public IBannerEditorStateHandler Handler { get; set; }` |

## Key Methods

### GetClan
`public Clan GetClan()`

**Purpose:** Gets the current value of `clan`.

### GetCharacter
`public CharacterObject GetCharacter()`

**Purpose:** Gets the current value of `character`.

## Usage Example

```csharp
var value = new BannerEditorState();
value.GetClan();
```

## See Also

- [Complete Class Catalog](../catalog)