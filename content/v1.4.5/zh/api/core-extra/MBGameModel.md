---
title: "MBGameModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBGameModel`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MBGameModel

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class MBGameModel<T> : GameModel where T : GameModel`
**Base:** `GameModel where T : GameModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/MBGameModel.cs`

## 概述

`MBGameModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `MBGameModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### Initialize
`public void Initialize(T baseModel)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

## 使用示例

```csharp
var implementation = new CustomMBGameModel();
```

## 参见

- [完整类目录](../catalog)