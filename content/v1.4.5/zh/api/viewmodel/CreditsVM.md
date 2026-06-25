---
title: "CreditsVM"
description: "CreditsVM 的自动生成类参考。"
---
# CreditsVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Credits
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CreditsVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Credits/CreditsVM.cs`

## 概述

`CreditsVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.Credits`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Credits` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `RootItem` | `public CreditsItemVM RootItem { get; set; }` |
| `ExitKey` | `public InputKeyItemVM ExitKey { get; set; }` |
| `ExitText` | `public string ExitText { get; set; }` |

## 主要方法

### FillFromFile
`public void FillFromFile(string path)`

**用途 / Purpose:** 处理与 「fill from file」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 CreditsVM 实例
CreditsVM creditsVM = ...;
creditsVM.FillFromFile("example");
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CreditsVM 实例
CreditsVM creditsVM = ...;
creditsVM.OnFinalize();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CreditsVM creditsVM = ...;
creditsVM.FillFromFile("example");
```

## 参见

- [本区域目录](../)