---
title: "MainStoryLineSide"
description: "玩家在主线中最终站到哪一边的五态枚举，是整个后续剧本的分支根。"
---
# MainStoryLineSide

**Namespace:** StoryMode
**Module:** StoryMode
**Type:** `public enum MainStoryLineSide`
**Base:** `System.Enum`
**Source:** `bannerlord-1.5.3/StoryMode/MainStoryLineSide.cs`

## 概述

五个值的枚举，没有任何成员。`None` 表示「玩家还没选边」，剩下四个把「帝国 vs 反帝国」和「自立 vs 效忠」两个维度交叉组合。它是**一次性的、单向的选择结果**，不是可反复切换的状态——`MainStoryLine.SetStoryLineSide` 一旦写入就会连带禁用两位导师，之后再改没有任何补救路径。

## 心智模型

它被 [MainStoryLine](../MainStoryLine) 以 `MainStoryLineSide` 公有字段（`[SaveableField(1)]`）持有，并在存档类型表 [SaveableStoryModeTypeDefiner](../SaveableStoryModeTypeDefiner) 里注册为枚举 id **2001**。写入的唯一入口是 `SetStoryLineSide(MainStoryLineSide side)`，真实调用点在 `SupportKingdomQuest` 里——玩家完成效忠/建国选择的那一刻。

四个具体值按语义分成两对：

| 值 | 派系 | 姿态 |
| --- | --- | --- |
| `CreateImperialKingdom` | 帝国侧 | 玩家自己当帝国君主 |
| `SupportImperialKingdom` | 帝国侧 | 给帝国打工 |
| `CreateAntiImperialKingdom` | 反帝国侧 | 玩家自己另立反帝国 |
| `SupportAntiImperialKingdom` | 反帝国侧 | 效忠反帝国 |

正因为下游经常只关心「哪一派」，[MainStoryLine](../MainStoryLine) 提供了 `IsOnImperialQuestLine` / `IsOnAntiImperialQuestLine` 两个派生属性，把四对一映射。**这两个属性才是绝大多数 mod 该读的东西**——它们的语义在四个值上完全一致，直接依赖具体枚举值等于把业务逻辑绑死在「自立/效忠」的区分上。

**坑**：

1. **`None` 不是安全默认值**。`IsOnImperialQuestLine` 和 `IsOnAntiImperialQuestLine` 在 `None` 下**都是 false**。写 `if (IsOnAntiImperialQuestLine) {...} else {...}` 会把「还没选边」误判成「帝国侧」。必须先判 `== None`。
2. **没有反向值**。枚举里没有 `AntiImperialKingdom` 这种对称命名——是 `Create` / `Support` 前缀 + `Imperial` / `AntiImperial`。拼错字符串在 C# 里会编译报错，但写代码生成器或数据驱动时要小心。
3. **`[SaveableProperty]` 与枚举 id 双重依赖**。字段用的是 `[SaveableField(1)]`（字段版），枚举用的是 `AddEnumDefinition(..., 2001, ...)`。改枚举成员顺序不会影响存档（按值存），但删掉某个值会让老存档里对应的 int 无法映射。

## 主要成员

- `None`：默认初始值，由 `MainStoryLine` 构造函数写入。语义是「尚未做出选择」。
- `CreateImperialKingdom`：玩家成为帝国君主。
- `SupportImperialKingdom`：玩家效忠帝国。
- `CreateAntiImperialKingdom`：玩家自立反帝国王国。
- `SupportAntiImperialKingdom`：玩家效忠反帝国势力。

枚举本身没有方法、没有字段、没有属性。下面这些行为在别处，不在本类型上：

- 写入：`MainStoryLine.SetStoryLineSide(...)`
- 读派系：`MainStoryLine.IsOnImperialQuestLine` / `IsOnAntiImperialQuestLine`
- 存储：`MainStoryLine.MainStoryLineSide` 字段 + 枚举 id 2001
- 附带效果：`SetStoryLineSide` 会快照 `PlayerSupportedKingdom`、广播 `OnMainStoryLineSideChosenEvent`、禁用两位导师

## 使用示例

```csharp
// 读法一（推荐）：只判派系，用派生属性
MainStoryLine line = StoryModeManager.Current.MainStoryLine;
if (line.MainStoryLineSide == MainStoryLineSide.None)
{
    Debug.Print("玩家还没选边");
}
else if (line.IsOnAntiImperialQuestLine)
{
    Debug.Print("反帝国派，反帝国导师是导师，当前导师城 " + line.AntiImperialMentorSettlement);
}
else
{
    Debug.Print("帝国派，当前导师城 " + line.ImperialMentorSettlement);
}

// 读法二（原生写法）：具体决定在 SupportKingdomQuest 里是这样落地的
if (kingdom.RulingClan == Clan.PlayerClan)
{
    StoryModeManager.Current.MainStoryLine.SetStoryLineSide(MainStoryLineSide.CreateImperialKingdom);
    MBInformationManager.ShowSceneNotification(new DeclareDragonBannerSceneNotificationItem(true));
}

// 读法三：拿派系去选导师英雄（决定谁给你发布阴谋任务）
Hero mentor = line.IsOnImperialQuestLine
    ? StoryModeHeroes.ImperialMentor
    : StoryModeHeroes.AntiImperialMentor;
```

## 风险与边界

- **`None` 的双 false 陷阱**：两个派生属性在 `None` 下同时为 false，任何「二选一」的写法都会把未选边当帝国侧。这是本枚举最容易出的逻辑 bug。
- **单向不可逆**：`SetStoryLineSide` 会 `DisableHeroAction.Apply` 禁用两位导师。即便你把字段改回 `None`，导师也回不来了。
- **`PlayerSupportedKingdom` 是快照**：选边那一刻读 `Clan.PlayerClan.Kingdom`，之后玩家叛国该字段不变。用它判断「现在支持谁」是错的。
- **枚举顺序即 int 值**：0..4。往中间插值会让手写的序列化数据错位。追加只能加到末尾。
- **没有 `Unknown` 兜底值**：从损坏存档读出的越界 int 不会 fallback 到 `None`，会静默成为一个定义外的值，所有相等比较全部失败。

## 依赖关系

- [MainStoryLine](../MainStoryLine) — 持有本枚举值的公有字段 `MainStoryLineSide`，并提供两个派系派生属性
- [SaveableStoryModeTypeDefiner](../SaveableStoryModeTypeDefiner) — 以枚举 id 2001 注册
- [StoryModeEvents](../StoryModeEvents) — `OnMainStoryLineSideChosen` 事件的参数类型就是这个枚举