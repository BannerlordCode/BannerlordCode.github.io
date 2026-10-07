---
title: "IMBMultiplayerData"
description: "Auto-generated class reference for IMBMultiplayerData."
---
# IMBMultiplayerData

> ⚠ 本页为自动生成的类参考，示例未经源码核对，勿直接引用其中的 API。

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `internal interface IMBMultiplayerData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/IMBMultiplayerData.cs`

## Overview

`IMBMultiplayerData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `IMBMultiplayerData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIMBMultiplayerData service = ...;
```

## See Also

- [Area Index](../)