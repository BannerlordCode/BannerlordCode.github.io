---
title: "SceneTextureProvider"
description: "SceneTextureProvider 的自动生成类参考。"
---
# SceneTextureProvider

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.TextureProviders
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SceneTextureProvider : TextureProvider`
**Base:** `TextureProvider`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/SceneTextureProvider.cs`

## 概述

`SceneTextureProvider` 位于 `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `WantedScene` | `public Scene WantedScene { get; }` |
| `IsReady` | `public bool? IsReady { get; set; }` |
| `Scene` | `public object Scene { get; set; }` |

## 主要方法

### Tick
`public override void Tick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 SceneTextureProvider 实例
SceneTextureProvider sceneTextureProvider = ...;
sceneTextureProvider.Tick(0);
```

### SetTargetSize
`public override void SetTargetSize(int width, int height)`

**用途 / Purpose:** **用途 / Purpose:** 为 target size 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SceneTextureProvider 实例
SceneTextureProvider sceneTextureProvider = ...;
sceneTextureProvider.SetTargetSize(0, 0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SceneTextureProvider sceneTextureProvider = ...;
sceneTextureProvider.Tick(0);
```

## 参见

- [本区域目录](../)