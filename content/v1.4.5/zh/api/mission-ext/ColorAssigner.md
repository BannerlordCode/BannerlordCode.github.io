---
title: "ColorAssigner"
description: "ColorAssigner 的自动生成类参考。"
---
# ColorAssigner

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ColorAssigner : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/ColorAssigner.cs`

## 概述

`ColorAssigner` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SetColor
`public void SetColor(WeakGameEntity entity)`

**用途 / Purpose:** 为 「color」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ColorAssigner 实例
ColorAssigner colorAssigner = ...;
colorAssigner.SetColor(entity);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ColorAssigner colorAssigner = ...;
colorAssigner.SetColor(entity);
```

## 参见

- [本区域目录](../)