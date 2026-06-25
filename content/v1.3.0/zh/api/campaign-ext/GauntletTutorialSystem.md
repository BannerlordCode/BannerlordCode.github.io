---
title: "GauntletTutorialSystem"
description: "GauntletTutorialSystem 的自动生成类参考。"
---
# GauntletTutorialSystem

**Namespace:** SandBox.GauntletUI.Tutorial
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletTutorialSystem : GlobalLayer`
**Base:** `GlobalLayer`
**File:** `SandBox.GauntletUI/Tutorial/GauntletTutorialSystem.cs`

## 概述

`GauntletTutorialSystem` 位于 `SandBox.GauntletUI.Tutorial`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.GauntletUI.Tutorial` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentEncyclopediaPageContext` | `public EncyclopediaPages CurrentEncyclopediaPageContext { get; }` |
| `IsCharacterPortraitPopupOpen` | `public bool IsCharacterPortraitPopupOpen { get; }` |
| `CurrentContext` | `public TutorialContexts CurrentContext { get; }` |

## 主要方法

### OnInitialize
`public static void OnInitialize()`

**用途 / Purpose:** 在 「initialize」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
GauntletTutorialSystem.OnInitialize();
```

### OnUnload
`public static void OnUnload()`

**用途 / Purpose:** 在 「unload」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
GauntletTutorialSystem.OnUnload();
```

## 使用示例

```csharp
GauntletTutorialSystem.OnInitialize();
```

## 参见

- [本区域目录](../)