---
title: "IScoreboardData"
description: "Auto-generated class reference for IScoreboardData."
---
# IScoreboardData

> ⚠ 本页为自动生成的类参考，示例未经源码核对，勿直接引用其中的 API。

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public interface IScoreboardData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/IScoreboardData.cs`

## Overview

`IScoreboardData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `IScoreboardData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIScoreboardData service = ...;
```

## See Also

- [Area Index](../)