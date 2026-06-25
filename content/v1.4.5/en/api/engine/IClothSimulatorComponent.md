---
title: "IClothSimulatorComponent"
description: "Auto-generated class reference for IClothSimulatorComponent."
---
# IClothSimulatorComponent

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `internal interface IClothSimulatorComponent`
**Base:** none
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/IClothSimulatorComponent.cs`

## Overview

`IClothSimulatorComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `IClothSimulatorComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIClothSimulatorComponent service = ...;
```

## See Also

- [Area Index](../)