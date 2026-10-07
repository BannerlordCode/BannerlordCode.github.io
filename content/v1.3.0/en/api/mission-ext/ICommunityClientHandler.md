---
title: "ICommunityClientHandler"
description: "Auto-generated class reference for ICommunityClientHandler."
---
# ICommunityClientHandler

> ⚠ 本页为自动生成的类参考，示例未经源码核对，勿直接引用其中的 API。

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public interface ICommunityClientHandler`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/ICommunityClientHandler.cs`

## Overview

`ICommunityClientHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `ICommunityClientHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IICommunityClientHandler service = ...;
```

## See Also

- [Area Index](../)