---
title: "SceneInitializationData"
description: "Auto-generated class reference for SceneInitializationData."
---
# SceneInitializationData

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public struct SceneInitializationData`
**Base:** none
**File:** `TaleWorlds.Engine/SceneInitializationData.cs`

## Overview

`SceneInitializationData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `SceneInitializationData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
SceneInitializationData entry = ...;
```

## See Also

- [Area Index](../)