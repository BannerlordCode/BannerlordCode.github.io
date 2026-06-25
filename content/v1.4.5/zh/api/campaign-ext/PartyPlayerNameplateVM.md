---
title: "PartyPlayerNameplateVM"
description: "PartyPlayerNameplateVM 的自动生成类参考。"
---
# PartyPlayerNameplateVM

**Namespace:** SandBox.ViewModelCollection.Nameplate
**Module:** SandBox.ViewModelCollection
**Type:** `public class PartyPlayerNameplateVM : PartyNameplateVM`
**Base:** `PartyNameplateVM`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Nameplate/PartyPlayerNameplateVM.cs`

## 概述

`PartyPlayerNameplateVM` 位于 `SandBox.ViewModelCollection.Nameplate`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Nameplate` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsMainParty` | `public bool IsMainParty { get; set; }` |
| `IsPrisoner` | `public bool IsPrisoner { get; set; }` |
| `MainHeroVisual` | `public CharacterImageIdentifierVM MainHeroVisual { get; set; }` |

## 主要方法

### InitializePlayerNameplate
`public void InitializePlayerNameplate(Action resetCamera)`

**用途 / Purpose:** 为 player nameplate 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 PartyPlayerNameplateVM 实例
PartyPlayerNameplateVM partyPlayerNameplateVM = ...;
partyPlayerNameplateVM.InitializePlayerNameplate(resetCamera);
```

### Clear
`public override void Clear()`

**用途 / Purpose:** 清空当前对象中的内容。

```csharp
// 先通过子系统 API 拿到 PartyPlayerNameplateVM 实例
PartyPlayerNameplateVM partyPlayerNameplateVM = ...;
partyPlayerNameplateVM.Clear();
```

### RefreshDynamicProperties
`public override void RefreshDynamicProperties(bool forceUpdate)`

**用途 / Purpose:** 使 dynamic properties 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 PartyPlayerNameplateVM 实例
PartyPlayerNameplateVM partyPlayerNameplateVM = ...;
partyPlayerNameplateVM.RefreshDynamicProperties(false);
```

### RefreshBinding
`public override void RefreshBinding()`

**用途 / Purpose:** 使 binding 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 PartyPlayerNameplateVM 实例
PartyPlayerNameplateVM partyPlayerNameplateVM = ...;
partyPlayerNameplateVM.RefreshBinding();
```

### RefreshPosition
`public override void RefreshPosition()`

**用途 / Purpose:** 使 position 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 PartyPlayerNameplateVM 实例
PartyPlayerNameplateVM partyPlayerNameplateVM = ...;
partyPlayerNameplateVM.RefreshPosition();
```

### ExecuteSetCameraPosition
`public void ExecuteSetCameraPosition()`

**用途 / Purpose:** 执行 set camera position 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 PartyPlayerNameplateVM 实例
PartyPlayerNameplateVM partyPlayerNameplateVM = ...;
partyPlayerNameplateVM.ExecuteSetCameraPosition();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PartyPlayerNameplateVM partyPlayerNameplateVM = ...;
partyPlayerNameplateVM.InitializePlayerNameplate(resetCamera);
```

## 参见

- [本区域目录](../)