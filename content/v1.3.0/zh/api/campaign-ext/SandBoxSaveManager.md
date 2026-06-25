---
title: "SandBoxSaveManager"
description: "SandBoxSaveManager 的自动生成类参考。"
---
# SandBoxSaveManager

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public class SandBoxSaveManager : ISaveManager`
**Base:** `ISaveManager`
**File:** `SandBox/SandBoxSaveManager.cs`

## 概述

`SandBoxSaveManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `SandBoxSaveManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetAutoSaveInterval
`public int GetAutoSaveInterval()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 auto save interval 的结果。

```csharp
// 先通过子系统 API 拿到 SandBoxSaveManager 实例
SandBoxSaveManager sandBoxSaveManager = ...;
var result = sandBoxSaveManager.GetAutoSaveInterval();
```

### OnSaveOver
`public void OnSaveOver(bool isSuccessful, string newSaveGameName)`

**用途 / Purpose:** **用途 / Purpose:** 在 save over 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SandBoxSaveManager 实例
SandBoxSaveManager sandBoxSaveManager = ...;
sandBoxSaveManager.OnSaveOver(false, "example");
```

## 使用示例

```csharp
var manager = SandBoxSaveManager.Current;
```

## 参见

- [本区域目录](../)