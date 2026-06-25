---
title: "IMissionSystemHandler"
description: "Auto-generated class reference for IMissionSystemHandler."
---
# IMissionSystemHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public interface IMissionSystemHandler`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/IMissionSystemHandler.cs`

## Overview

`IMissionSystemHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `IMissionSystemHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIMissionSystemHandler service = ...;
```

## See Also

- [Area Index](../)