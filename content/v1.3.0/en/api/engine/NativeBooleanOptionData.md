---
title: "NativeBooleanOptionData"
description: "Auto-generated class reference for NativeBooleanOptionData."
---
# NativeBooleanOptionData

**Namespace:** TaleWorlds.Engine.Options
**Module:** TaleWorlds.Engine
**Type:** `public class NativeBooleanOptionData : NativeOptionData, IBooleanOptionData, IOptionData`
**Base:** `NativeOptionData`
**File:** `TaleWorlds.Engine/Options/NativeBooleanOptionData.cs`

## Overview

`NativeBooleanOptionData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `NativeBooleanOptionData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
NativeBooleanOptionData entry = ...;
```

## See Also

- [Area Index](../)