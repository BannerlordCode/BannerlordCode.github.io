---
title: "IMusicHandler"
description: "Auto-generated class reference for IMusicHandler."
---
# IMusicHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public interface IMusicHandler`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/IMusicHandler.cs`

## Overview

`IMusicHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `IMusicHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIMusicHandler service = ...;
```

## See Also

- [Area Index](../)