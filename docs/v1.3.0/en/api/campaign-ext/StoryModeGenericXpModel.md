<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StoryModeGenericXpModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StoryModeGenericXpModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeGenericXpModel : GenericXpModel`
**Base:** `GenericXpModel`
**File:** `StoryMode/GameComponents/StoryModeGenericXpModel.cs`

## Overview

`StoryModeGenericXpModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `StoryModeGenericXpModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetXpMultiplier
`public override float GetXpMultiplier(Hero hero)`

**Purpose:** Gets the current value of `xp multiplier`.

## Usage Example

```csharp
Game.Current.ReplaceModel<StoryModeGenericXpModel>(new MyStoryModeGenericXpModel());
```

## See Also

- [Complete Class Catalog](../catalog)