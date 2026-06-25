---
title: "ConversationTagView"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ConversationTagView`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ConversationTagView

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ConversationTagView`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/ConversationTagView.cs`

## Overview

`ConversationTagView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `ConversationTagView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetSkillMeshName
`public static string GetSkillMeshName(SkillObject skillEnum, bool isOn = false)`

**Purpose:** Gets the current value of `skill mesh name`.

## Usage Example

```csharp
var view = new ConversationTagView();
```

## See Also

- [Complete Class Catalog](../catalog)