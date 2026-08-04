---
title: "IncidentHelper"
description: "使用 Campaign incident 候选集合选择可复现的随机元素。"
---
# IncidentHelper

**命名空间：** `Helpers`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public static class IncidentHelper`  
**基类：** `System.Object`  
**源文件：** `bin/TaleWorlds.CampaignSystem/Helpers/IncidentHelper.cs`

## 一句话职责

`IncidentHelper` 使用 [MobileParty](../../campaign/MobileParty) 关联 `MobileParty.MainParty` 的 seeded-random 流，从非空 incident 候选集合中选择一个元素。

## 心智模型

这个 helper 是 incident 逻辑的确定性选择适配器。它不会创建 seed、打乱集合或修改选中的值。每个重载都遵循相同算法：

1. 集合为 `null` 或为空时返回 `default(T)`。
2. 把 `long seed` 转换为 `uint`。
3. 调用 `MobileParty.MainParty.RandomIntWithSeed((uint)seed, list.Count)` 取得索引。
4. 返回该索引处的元素。

候选集合必须已经包含 incident 自己的资格规则。原版 [Incident](../../campaign/Incident) behavior 会先过滤村庄、部队 roster 元素、物品、工坊或领主，再把集合交给这个 helper。helper 只提供可复现性，不拥有领域策略。

## 什么时候使用，什么时候不要使用

- **适合：** incident 需要在相同 seed 和相同候选顺序下得到相同候选时使用。
- **适合：** 保留调用方已经产生的容器类型：`List<T>`、[MBList](../../core-extra/MBList)`<T>` 或 [MBReadOnlyList](../../core-extra/MBReadOnlyList)`<T>`。
- **不要：** 把它当作全局随机数 API；索引来自 `MobileParty.MainParty.RandomIntWithSeed`。
- **不要在重试前改变候选顺序：** seed 只有在集合内容和顺序相同的前提下才可复现。
- **不要假定一定有结果：** 空集合返回 `default(T)`，引用类型的结果就是 `null`。

## 公开入口

### `List<T>` 重载

```csharp
public static T GetSeededRandomElement<T>(List<T> list, long seed)
```

当 LINQ 过滤或其他 Campaign 流程已经生成普通 `List<T>` 时使用该重载。方法会在索引前检查 `Count`。

### `MBList<T>` 重载

```csharp
public static T GetSeededRandomElement<T>(MBList<T> list, long seed)
```

该重载保留 Bannerlord 的 `MBList<T>` 容器，不必转换为 framework list。它使用相同的 seeded index 计算和空列表行为。

### `MBReadOnlyList<T>` 重载

```csharp
public static T GetSeededRandomElement<T>(MBReadOnlyList<T> list, long seed)
```

该重载接受只读 engine 集合，并返回选中的值，而不是可变集合或索引。

## 真实 Campaign incident 流程

`IncidentsCampaignBehaviour` 在过滤 main party roster 后，把 `_activeIncidentSeed` 传给该 helper。之后选中的 roster 元素会成为 incident 的具体部队：

```csharp
using System.Linq;
using Helpers;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Roster;

if (Hero.MainHero != null && MobileParty.MainParty != null)
{
    List<TroopRosterElement> candidates = MobileParty.MainParty.MemberRoster
        .GetTroopRoster()
        .Where(element => !element.Character.IsHero)
        .ToList();

    if (candidates.Count > 0)
    {
        TroopRosterElement selected = IncidentHelper
            .GetSeededRandomElement(candidates, _activeIncidentSeed);

        CharacterObject selectedCharacter = selected.Character;
    }
}
```

原版 behavior 会先安排 incident 前置条件，并在可能没有候选时检查结果。自定义 incident 在解引用默认结果前也应执行同样的检查。

## 依赖与所有权

- [MobileParty](../../campaign/MobileParty) 提供用于计算索引的 `MainParty` seeded-random 实现。
- [MBRandom](../../core-extra/MBRandom) 记录 engine 随机辅助 API；本类具体调用的是 party 扩展，而不是进程级全局随机方法。
- [TroopRoster](../../campaign/TroopRoster)、`ItemRoster`、村庄、工坊和领主集合都是原版 incident behavior 的候选所有者。
- [Incident](../../campaign/Incident) 与 `IncidentsCampaignBehaviour` 负责 seed 生命周期、候选过滤、前置条件和后果。
- helper 只负责选择，不返回所选索引的额外元数据。

## 风险与可复现边界

- `long` seed 会缩窄为 `uint`；只在高 32 位不同的 seed 可能得到相同序列。
- 可复现性依赖候选顺序和数量。调用前采用不同排序或过滤，即使 seed 不变，也可能得到不同元素。
- 输入为 `null` 或空集合时返回 `default(T)`。引用类型必须按 `null` 处理；struct 则所有字段都是默认值。
- helper 在集合检查之后会读取 `MobileParty.MainParty`；只有 Campaign 中存在主队伍时才能调用。`MainParty` 为空不会被转换成安全的默认结果。
- helper 不保存结果。需要跨存档继续的 incident 必须由所属 behavior 保存 seed 或选中状态。
- 调用 helper 不会从源集合移除物品、部队或 settlement；这些 mutation 由后续 incident consequence 执行。

## 版本注记

本页按 v1.4.5 `IncidentHelper.cs` 编写。三个公开方法是语义相同的 generic 重载，区别只有集合类型。

## 导航

- [↑ API 系统索引](../)
- [相关：Incident](../../campaign/Incident)
- [相关：MobileParty](../../campaign/MobileParty)
- [相关：MBList](../../core-extra/MBList)
- [相关：MBReadOnlyList](../../core-extra/MBReadOnlyList)
