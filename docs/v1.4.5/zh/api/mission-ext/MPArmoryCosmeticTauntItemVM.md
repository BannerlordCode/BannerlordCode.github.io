<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPArmoryCosmeticTauntItemVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MPArmoryCosmeticTauntItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticItem
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPArmoryCosmeticTauntItemVM : MPArmoryCosmeticItemBaseVM`
**Base:** `MPArmoryCosmeticItemBaseVM`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticItem/MPArmoryCosmeticTauntItemVM.cs`

## 概述

`MPArmoryCosmeticTauntItemVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticItem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticItem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TauntCategory` | `public MPArmoryCosmeticsVM.TauntCategoryFlag TauntCategory { get; set; }` |
| `TauntCosmeticElement` | `public TauntCosmeticElement TauntCosmeticElement { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `RequiresOnFoot` | `public bool RequiresOnFoot { get; set; }` |
| `PreviewAnimationRatio` | `public float PreviewAnimationRatio { get; set; }` |
| `SelectSlotText` | `public string SelectSlotText { get; set; }` |
| `CancelEquipText` | `public string CancelEquipText { get; set; }` |
| `TauntID` | `public string TauntID { get; set; }` |
| `TauntUsages` | `public MBBindingList<StringItemWithEnabledAndHintVM> TauntUsages { get; set; }` |
| `BlocksMovementOnUsageHint` | `public HintViewModel BlocksMovementOnUsageHint { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

## 使用示例

```csharp
var value = new MPArmoryCosmeticTauntItemVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)