<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HeroViewModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HeroViewModel

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class HeroViewModel : CharacterViewModel`
**Base:** `CharacterViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/HeroViewModel.cs`

## 概述

`HeroViewModel` 是一个 Gauntlet ViewModel——C# 逻辑与 Gauntlet UI 之间的数据绑定桥梁。用 `[DataSourceProperty]` 绑定属性，重写 OnPropertyChanged 响应变化。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsDead` | `public bool IsDead { get; set; }` |

## 主要方法

### SetEquipment
```csharp
public override void SetEquipment(Equipment equipment)
```

### FillFrom
```csharp
public void FillFrom(Hero hero, int seed = -1, bool useCivilian = false, bool useCharacteristicIdleAction = false)
```

### OnFinalize
```csharp
public override void OnFinalize()
```

## 使用示例

```csharp
// HeroViewModel (ViewModel) 的典型用法
// 绑定一个 HeroViewModel 到 Gauntlet UI
var vm = new HeroViewModel();
movie.SetViewModel(vm);;
```

## 参见

- [完整类目录](../catalog)