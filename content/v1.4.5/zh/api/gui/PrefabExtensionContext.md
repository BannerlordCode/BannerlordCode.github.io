---
title: "PrefabExtensionContext"
description: "PrefabExtensionContext 的自动生成类参考。"
---
# PrefabExtensionContext

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public class PrefabExtensionContext`
**Base:** 无
**File:** `bin/TaleWorlds.GauntletUI.PrefabSystem/TaleWorlds.GauntletUI.PrefabSystem/PrefabExtensionContext.cs`

## 概述

`PrefabExtensionContext` 位于 `TaleWorlds.GauntletUI.PrefabSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI.PrefabSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### AddExtension
`public void AddExtension(PrefabExtension prefabExtension)`

**用途 / Purpose:** **用途 / Purpose:** 将 extension 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 PrefabExtensionContext 实例
PrefabExtensionContext prefabExtensionContext = ...;
prefabExtensionContext.AddExtension(prefabExtension);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PrefabExtensionContext prefabExtensionContext = ...;
prefabExtensionContext.AddExtension(prefabExtension);
```

## 参见

- [本区域目录](../)