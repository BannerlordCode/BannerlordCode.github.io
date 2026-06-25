---
title: "IChatHandler"
description: "Auto-generated class reference for IChatHandler."
---
# IChatHandler

**Namespace:** (global)
**Module:** (global)
**Type:** `public interface IChatHandler`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/IChatHandler.cs`

## Overview

`IChatHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `IChatHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIChatHandler service = ...;
```

## See Also

- [Area Index](../)