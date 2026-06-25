---
title: "SceneTableau"
description: "SceneTableau 的自动生成类参考。"
---
# SceneTableau

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SceneTableau`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/SceneTableau.cs`

## 概述

`SceneTableau` 位于 `TaleWorlds.MountAndBlade.View.Tableaus`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.View.Tableaus` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `_texture` | `public Texture _texture { get; }` |
| `IsReady` | `public bool? IsReady { get; }` |

## 主要方法

### SetTargetSize
`public void SetTargetSize(int width, int height)`

**用途 / Purpose:** 为 「target size」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SceneTableau 实例
SceneTableau sceneTableau = ...;
sceneTableau.SetTargetSize(0, 0);
```

### OnFinalize
`public void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SceneTableau 实例
SceneTableau sceneTableau = ...;
sceneTableau.OnFinalize();
```

### SetScene
`public void SetScene(object scene)`

**用途 / Purpose:** 为 「scene」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SceneTableau 实例
SceneTableau sceneTableau = ...;
sceneTableau.SetScene(scene);
```

### SetBannerCode
`public void SetBannerCode(string value)`

**用途 / Purpose:** 为 「banner code」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SceneTableau 实例
SceneTableau sceneTableau = ...;
sceneTableau.SetBannerCode("example");
```

### RotateCharacter
`public void RotateCharacter(bool value)`

**用途 / Purpose:** 处理与 「rotate character」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 SceneTableau 实例
SceneTableau sceneTableau = ...;
sceneTableau.RotateCharacter(false);
```

### OnTick
`public void OnTick(float dt)`

**用途 / Purpose:** 在 「tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SceneTableau 实例
SceneTableau sceneTableau = ...;
sceneTableau.OnTick(0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SceneTableau sceneTableau = ...;
sceneTableau.SetTargetSize(0, 0);
```

## 参见

- [本区域目录](../)