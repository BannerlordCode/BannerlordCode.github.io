---
title: "FrameworkDomain"
description: "FrameworkDomain 的自动生成类参考。"
---
# FrameworkDomain

**Namespace:** TaleWorlds.TwoDimension.Standalone
**Module:** TaleWorlds.TwoDimension
**Type:** `public abstract class FrameworkDomain`
**Base:** 无
**File:** `bin/TaleWorlds.TwoDimension.Standalone/TaleWorlds.TwoDimension.Standalone/FrameworkDomain.cs`

## 概述

`FrameworkDomain` 位于 `TaleWorlds.TwoDimension.Standalone`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension.Standalone` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Update
`public abstract void Update()`

**用途 / Purpose:** 重新计算并更新当前对象的最新表示。

```csharp
// 先通过子系统 API 拿到 FrameworkDomain 实例
FrameworkDomain frameworkDomain = ...;
frameworkDomain.Update();
```

### Destroy
`public abstract void Destroy()`

**用途 / Purpose:** 调用 Destroy 对应的操作。

```csharp
// 先通过子系统 API 拿到 FrameworkDomain 实例
FrameworkDomain frameworkDomain = ...;
frameworkDomain.Destroy();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
FrameworkDomain instance = ...;
```

## 参见

- [本区域目录](../)