---
title: "IMBVoiceManager"
description: "Auto-generated class reference for IMBVoiceManager."
---
# IMBVoiceManager

> ⚠ 本页为自动生成的类参考，示例未经源码核对，勿直接引用其中的 API。

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `internal interface IMBVoiceManager`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/IMBVoiceManager.cs`

## Overview

`IMBVoiceManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `IMBVoiceManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIMBVoiceManager service = ...;
```

## See Also

- [Area Index](../)