<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionAgentTakenDamageVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionAgentTakenDamageVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionAgentTakenDamageVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.HUD/MissionAgentTakenDamageVM.cs`

## 概述

`MissionAgentTakenDamageVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TakenDamageList` | `public MBBindingList<MissionAgentTakenDamageItemVM> TakenDamageList { get; set; }` |

## 主要方法

### SetIsEnabled
`public void SetIsEnabled(bool isEnabled)`

**用途 / Purpose:** 设置 `is enabled` 的值或状态。

## 使用示例

```csharp
var value = new MissionAgentTakenDamageVM();
value.SetIsEnabled(false);
```

## 参见

- [完整类目录](../catalog)