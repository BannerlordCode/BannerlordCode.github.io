<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BattleViewModel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BattleViewModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleViewModel`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BattleViewModel.cs`

## 概述

`BattleViewModel` 是一个 Gauntlet ViewModel——C# 逻辑与 UI 之间的数据绑定桥梁。mod 常通过它暴露状态、命令和列表项给界面。

## 心智模型

把 `BattleViewModel` 当作一个 ViewModel 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MyData` | `public ObservableCollection<TroopMissionInfo> MyData { get; set; }` |

## 使用示例

```csharp
var vm = new BattleViewModel();
movie.SetViewModel(vm);
```

## 参见

- [完整类目录](../catalog)