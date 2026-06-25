---
title: "MultiplayerLocalData"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerLocalData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerLocalData

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MultiplayerLocalData`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond.Lobby/MultiplayerLocalData.cs`

## 概述

`MultiplayerLocalData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `MultiplayerLocalData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### HasSameContentWith
`public abstract bool HasSameContentWith(MultiplayerLocalData other)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `same content with`。

## 使用示例

```csharp
var implementation = new CustomMultiplayerLocalData();
```

## 参见

- [完整类目录](../catalog)