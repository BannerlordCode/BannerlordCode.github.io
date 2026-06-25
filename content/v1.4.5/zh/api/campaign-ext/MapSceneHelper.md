---
title: "MapSceneHelper"
description: "MapSceneHelper 的自动生成类参考。"
---
# MapSceneHelper

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public static class MapSceneHelper`
**Base:** 无
**File:** `Modules.SandBox/SandBox/Sandbox/SandBoxHelpers.cs`

## 概述

`MapSceneHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `MapSceneHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetRegionMapping
`public static bool GetRegionMapping(PartyNavigationModel model)`

**用途 / Purpose:** 读取并返回当前对象中 「region mapping」 的结果。

```csharp
// 静态调用，不需要实例
MapSceneHelper.GetRegionMapping(model);
```

## 使用示例

```csharp
MapSceneHelper.Initialize();
```

## 参见

- [本区域目录](../)