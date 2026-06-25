---
title: "IScreenFadeHandler"
description: "Auto-generated class reference for IScreenFadeHandler."
---
# IScreenFadeHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public interface IScreenFadeHandler`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/IScreenFadeHandler.cs`

## Overview

`IScreenFadeHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `IScreenFadeHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIScreenFadeHandler service = ...;
```

## See Also

- [Area Index](../)