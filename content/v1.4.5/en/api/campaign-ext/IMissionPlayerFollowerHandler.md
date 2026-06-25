---
title: "IMissionPlayerFollowerHandler"
description: "Auto-generated class reference for IMissionPlayerFollowerHandler."
---
# IMissionPlayerFollowerHandler

**Namespace:** SandBox.GameComponents
**Module:** SandBox.GameComponents
**Type:** `public interface IMissionPlayerFollowerHandler`
**Base:** none
**File:** `Modules.SandBox/SandBox/SandBox.GameComponents/IMissionPlayerFollowerHandler.cs`

## Overview

`IMissionPlayerFollowerHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `IMissionPlayerFollowerHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIMissionPlayerFollowerHandler service = ...;
```

## See Also

- [Area Index](../)