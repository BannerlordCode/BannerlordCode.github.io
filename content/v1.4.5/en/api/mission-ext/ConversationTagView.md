---
title: "ConversationTagView"
description: "Auto-generated class reference for ConversationTagView."
---
# ConversationTagView

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ConversationTagView`
**Base:** none
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View/ConversationTagView.cs`

## Overview

`ConversationTagView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `ConversationTagView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetSkillMeshName
`public static string GetSkillMeshName(SkillObject skillEnum, bool isOn = false)`

**Purpose:** Reads and returns the `skill mesh name` value held by the current object.

```csharp
// Static call; no instance required
ConversationTagView.GetSkillMeshName(skillEnum, false);
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
ConversationTagView view = ...;
```

## See Also

- [Area Index](../)