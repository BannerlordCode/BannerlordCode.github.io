---
title: "MPChatLineVM"
description: "MPChatLineVM 的自动生成类参考。"
---
# MPChatLineVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPChatLineVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Multiplayer/MPChatLineVM.cs`

## 概述

`MPChatLineVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.Multiplayer`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Multiplayer` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ChatLine` | `public string ChatLine { get; set; }` |
| `Color` | `public Color Color { get; set; }` |
| `Alpha` | `public float Alpha { get; set; }` |
| `Category` | `public string Category { get; set; }` |

## 主要方法

### HandleFading
`public void HandleFading(float dt)`

**用途 / Purpose:** 执行与 「fading」 相关的响应逻辑。

```csharp
// 先通过子系统 API 拿到 MPChatLineVM 实例
MPChatLineVM mPChatLineVM = ...;
mPChatLineVM.HandleFading(0);
```

### ForceInvisible
`public void ForceInvisible()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MPChatLineVM 实例
MPChatLineVM mPChatLineVM = ...;
mPChatLineVM.ForceInvisible();
```

### ToggleForceVisible
`public void ToggleForceVisible(bool visible)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MPChatLineVM 实例
MPChatLineVM mPChatLineVM = ...;
mPChatLineVM.ToggleForceVisible(false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPChatLineVM mPChatLineVM = ...;
mPChatLineVM.HandleFading(0);
```

## 参见

- [本区域目录](../)