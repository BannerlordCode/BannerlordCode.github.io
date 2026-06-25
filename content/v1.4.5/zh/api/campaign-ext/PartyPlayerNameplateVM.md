---
title: "PartyPlayerNameplateVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyPlayerNameplateVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PartyPlayerNameplateVM

**Namespace:** SandBox.ViewModelCollection.Nameplate
**Module:** SandBox.ViewModelCollection
**Type:** `public class PartyPlayerNameplateVM : PartyNameplateVM`
**Base:** `PartyNameplateVM`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Nameplate/PartyPlayerNameplateVM.cs`

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

**用途 / Purpose:** 初始化 `player nameplate` 的状态、资源或绑定。

### Clear
`public override void Clear()`

**用途 / Purpose:** 处理 `clear` 相关逻辑。

### RefreshDynamicProperties
`public override void RefreshDynamicProperties(bool forceUpdate)`

**用途 / Purpose:** 刷新 `dynamic properties` 的显示或缓存。

### RefreshBinding
`public override void RefreshBinding()`

**用途 / Purpose:** 刷新 `binding` 的显示或缓存。

### RefreshPosition
`public override void RefreshPosition()`

**用途 / Purpose:** 刷新 `position` 的显示或缓存。

### ExecuteSetCameraPosition
`public void ExecuteSetCameraPosition()`

**用途 / Purpose:** 执行 `set camera position` 操作或流程。

## 使用示例

```csharp
var value = new PartyPlayerNameplateVM();
value.InitializePlayerNameplate(resetCamera);
```

## 参见

- [完整类目录](../catalog)