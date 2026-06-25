---
title: "BrightnessDemoTableau"
description: "BrightnessDemoTableau 的自动生成类参考。"
---
# BrightnessDemoTableau

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BrightnessDemoTableau`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/BrightnessDemoTableau.cs`

## 概述

`BrightnessDemoTableau` 位于 `TaleWorlds.MountAndBlade.View.Tableaus`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.View.Tableaus` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Texture` | `public Texture Texture { get; }` |

## 主要方法

### SetDemoType
`public void SetDemoType(int demoType)`

**用途 / Purpose:** 为 「demo type」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 BrightnessDemoTableau 实例
BrightnessDemoTableau brightnessDemoTableau = ...;
brightnessDemoTableau.SetDemoType(0);
```

### SetTargetSize
`public void SetTargetSize(int width, int height)`

**用途 / Purpose:** 为 「target size」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 BrightnessDemoTableau 实例
BrightnessDemoTableau brightnessDemoTableau = ...;
brightnessDemoTableau.SetTargetSize(0, 0);
```

### OnFinalize
`public void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BrightnessDemoTableau 实例
BrightnessDemoTableau brightnessDemoTableau = ...;
brightnessDemoTableau.OnFinalize();
```

### SetScene
`public void SetScene()`

**用途 / Purpose:** 为 「scene」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 BrightnessDemoTableau 实例
BrightnessDemoTableau brightnessDemoTableau = ...;
brightnessDemoTableau.SetScene();
```

### OnTick
`public void OnTick(float dt)`

**用途 / Purpose:** 在 「tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BrightnessDemoTableau 实例
BrightnessDemoTableau brightnessDemoTableau = ...;
brightnessDemoTableau.OnTick(0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
BrightnessDemoTableau brightnessDemoTableau = ...;
brightnessDemoTableau.SetDemoType(0);
```

## 参见

- [本区域目录](../)