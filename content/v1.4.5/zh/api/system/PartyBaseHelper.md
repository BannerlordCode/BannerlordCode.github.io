---
title: "PartyBaseHelper"
description: "PartyBase 与 roster 的显示、容量、队长、速度限制和文化特性辅助；它提供即时计算与少数 roster 排序操作，不拥有 PartyBase 生命周期。"
---
# PartyBaseHelper

**命名空间：** Helpers  
**模块：** TaleWorlds.CampaignSystem  
**类型：** public static class PartyBaseHelper  
**基类：** System.Object  
**源文件：** bin/TaleWorlds.CampaignSystem/Helpers/PartyBaseHelper.cs

## 一句话职责

这个静态类把 [PartyBase](../../campaign/PartyBase) 的名册显示、健康人数、容量比例、视觉领袖、动物速度限制和 Feat 查询集中成可复用的 Campaign 辅助。

## 心智模型

PartyBaseHelper 只消费已由 [MobileParty](../../campaign/MobileParty) 或 [Settlement](../../campaign/Settlement) 持有的 PartyBase。它不创建 PartyBase、不注册移动队伍，也不负责遭遇、囚禁、转移和销毁的生命周期。大多数入口是即时计算或本地化文本生成；SortRoster 是直接改动成员 roster 顺序的例外。

使用时先区分三个边界：

- GetPartySizeText、GetShipSizeText、Print*、GetVisualPartyLeader 和 GetSpeedLimitation 适合 UI、tooltip、日志和只读规则计算。
- FindPartySizeNormalLimit、GetCaptainOfTroop 和 HasFeat 是当前状态/随机结果的计算，不会把结果写回 PartyBase。
- SortRoster 会把最高 Tier 的角色移到 roster 索引 0；它不是纯查询。英雄加入、俘虏、物品交易或战斗必须走对应 Action，而不是借 helper 改写世界关系。

## 依赖

| 依赖 | 作用与时机 |
| --- | --- |
| [PartyBase](../../campaign/PartyBase) | 提供 MemberRoster、PrisonRoster、ItemRoster、健康人数、LeaderHero、Culture、宿主和地图状态；helper 不取得孤儿 PartyBase。 |
| [MobileParty](../../campaign/MobileParty) 与 [Settlement](../../campaign/Settlement) | 移动队伍或据点创建并持有 PartyBase；FindPartySizeNormalLimit 只对 MobileParty 的工资、支付上限和 PartySizeLimit 有意义。 |
| [Campaign](../../campaign/Campaign) 与 Models | 容量比例读取 AverageWage、PaymentLimit、PartySizeLimit；Model 未准备时不能读取这些派生值。 |
| [TroopRoster](../../campaign/TroopRoster) 与 [ItemRoster](../../campaign/ItemRoster) | 显示、排序、兵种分类、物品类别和动物速度限制都直接遍历 roster。 |
| [CharacterObject](../../campaign/CharacterObject)、[Hero](../../campaign/Hero)、FeatObject | 视觉领袖、随机队长和文化 Feat 查询使用角色/派系文化；结果不改变对象。 |
| [AddHeroToPartyAction](../../campaign-ext/AddHeroToPartyAction)、[TakePrisonerAction](../../campaign-ext/TakePrisonerAction)、[DestroyPartyAction](../../campaign-ext/DestroyPartyAction) | 负责完整的队伍关系、囚禁和终结；helper 不能替代这些世界变更入口。 |

## 主要入口与调用边界

### 健康人数、船只与容量

| 入口 | 实际行为 | 使用时机 |
| --- | --- | --- |
| GetPartySizeText(PartyBase) | 健康人数等于总人数时返回单一数字，否则设置 HEALTHY_NUM/WOUNDED_NUM 并查找 str_party_health。 | Party UI、tooltip 和通知；返回的是本地化 TextObject。 |
| GetPartySizeText(int, int, bool) | isInspected 时显示精确健康/受伤人数；未 inspected 时按总人数阈值返回若干 ?，避免暴露精确规模。 | 按 UI 是否已侦察选择信息泄露边界；参数名中的 healtyNumber 是源码拼写，不影响语义。 |
| GetShipSizeText(int, bool) | 已 inspected 返回船数，否则返回 ?。 | 海上队伍的 UI 显示；它不检查船库存是否合法。 |
| FindPartySizeNormalLimit(MobileParty) | 用 PaymentLimit、非 Clan Leader 的领袖工资、TotalWage、AverageWage 和 PartySizeLimit 算出 0.1 到 1.0 的比例。 | AI/经济计算输入；返回比例，不是额外兵员数，也不是持久化上限。 |

### 队伍成员与视觉

| 入口 | 实际行为 | 注意事项 |
| --- | --- | --- |
| SortRoster(MobileParty) | 遍历成员 roster，寻找最高 Tier 的 CharacterObject，并把它与索引 0 的单位交换；达到 CharacterStatsModel 的最高 Tier 时提前停止。 | 会改变 roster 顺序/版本；只在确实拥有队伍 roster 的流程中调用，不要用于纯预览。 |
| GetCaptainOfTroop(PartyBase, CharacterObject) | 以 20% 随机机会从未 wounded 的 Hero 成员中选一个，否则回退到 PartyBase.LeaderHero。affectorCharacter 在该版本方法体中未被读取。 | 这是随机显示/战斗文本输入，不是任命队长，也不保证返回非 null。 |
| GetVisualPartyLeader(PartyBase) | null Party 返回 null；有 LeaderHero 时返回其 CharacterObject；没有领袖但有成员时返回索引 0 角色。 | 用于地图图标、通知和角色图像；不要把视觉领袖当作真实政治领袖。 |
| GetSpeedLimitation(ItemRoster, out ItemObject) | 遍历动物物品，返回最低 modified mount speed 及对应 Item；没有动物时返回 100 和 null。 | 只读速度诊断；不改变库存或 Party Speed。 |

### 文本与 roster 摘要

| 入口 | 实际行为 | 输出边界 |
| --- | --- | --- |
| PrintRosterContents(TroopRoster) | Hero 只输出名字，普通角色输出数量和名字，用逗号连接。 | 用于诊断/文本；它不包含 roster 的全部保存字段。 |
| PrintSummarisedItemRoster(ItemRoster) | 将物品分为 trade good、armor、weapon、other 四类，统计总量并保留每类价值最高的物品作为代表；没有物品时返回空 TextObject。 | 这是摘要，不是精确库存清单；不要用它做交易扣除或存档。 |
| PrintRegularTroopCategories(TroopRoster) | 排除 Hero 和零数量单位，按 Infantry、Ranged、Cavalry、HorseArcher 累计并合并为本地化文本。 | 只代表普通兵种分类；不显示 Hero、受伤拆分或具体单位。 |
| HasFeat(PartyBase, FeatObject) | 按 LeaderHero 文化、Party Culture、Owner Culture、Settlement Culture 顺序查找 Feat；所有上下文都没有时返回 false。 | 这是文化规则查询；它不添加 Feat，也不应被当成 Model 替换。 |

## 真实示例：读取玩家队伍的 UI/诊断数据

下面从活动 Campaign 的主移动队伍取得宿主 PartyBase，读取真实的显示、视觉领袖和动物速度限制；它不改动 roster：

```csharp
    using TaleWorlds.CampaignSystem;
    using TaleWorlds.CampaignSystem.Party;
    using TaleWorlds.Core;
    using TaleWorlds.Localization;

    public static class PartySummary
    {
        public static TextObject GetCurrentPartySummary(out CharacterObject visualLeader, out ItemObject speedItem)
        {
            visualLeader = null;
            speedItem = null;
            if (Campaign.Current == null || MobileParty.MainParty == null || !MobileParty.MainParty.IsActive)
            {
                return TextObject.GetEmpty();
            }

            PartyBase party = MobileParty.MainParty.Party;
            TextObject size = PartyBaseHelper.GetPartySizeText(party);
            visualLeader = PartyBaseHelper.GetVisualPartyLeader(party);
            PartyBaseHelper.GetSpeedLimitation(party.ItemRoster, out speedItem);
            return size;
        }
    }
```

size 可能是精确人数，也可能是根据侦察边界生成的文本；视觉领袖和速度限制同样是调用时结果。

## 风险与存档边界

- **Campaign/Model 阶段：** FindPartySizeNormalLimit 读取 Campaign.Current.AverageWage、支付上限和 Model；在主菜单、加载早期或 Campaign 已销毁后调用可能失败。
- **Roster 副作用：** SortRoster 会交换实际成员。不要在 UI 渲染、重复 tick 或仅为了取得最高 Tier 时调用它；纯查询应自行遍历或使用只读入口。
- **随机结果：** GetCaptainOfTroop 使用随机数，不能用于持久化任命或跨 tick 复现的身份。需要真实领袖应读取 PartyBase.LeaderHero。
- **摘要不是事实：** Print* 文本会丢失具体 roster 字段，GetPartySizeText 可能故意隐藏精确人数，GetSpeedLimitation 只反映动物速度。不要解析这些文本来做世界变更。
- **Action 边界：** PartyBaseHelper 不处理 Hero 加入、囚禁、交易、战斗、解散或销毁。分别使用 [AddHeroToPartyAction](../../campaign-ext/AddHeroToPartyAction)、[TakePrisonerAction](../../campaign-ext/TakePrisonerAction)、[StartBattleAction](../../campaign-ext/StartBattleAction) 和 [DestroyPartyAction](../../campaign-ext/DestroyPartyAction)。
- **存档与缓存：** PartyBase 和三份 roster 属于 Campaign 对象图；容量、健康人数、战力和视觉数据可能在读档后重算。不要保存 TextObject、枚举器、缓存比例或旧 PartyBase 引用作为跨存档句柄。

## 版本注记

本页按 v1.4.5 Helpers/PartyBaseHelper.cs 及其在 AI、地图视觉、GameMenu overlay、tooltip 和通知 ViewModel 中的调用点书写。GetCaptainOfTroop 的 affectorCharacter 参数在该版本方法体中未读取；不要为它臆造额外筛选语义。

## 导航

- ↑ 父级：[System API](../)
- ↔ 同级：[PartyBase](../../campaign/PartyBase) · [MobileParty](../../campaign/MobileParty) · [Settlement](../../campaign/Settlement) · [TroopRoster](../../campaign/TroopRoster)
- 相关：[ItemRoster](../../campaign/ItemRoster) · [CharacterObject](../../campaign/CharacterObject) · [Hero](../../campaign/Hero) · [AddHeroToPartyAction](../../campaign-ext/AddHeroToPartyAction) · [TakePrisonerAction](../../campaign-ext/TakePrisonerAction) · [StartBattleAction](../../campaign-ext/StartBattleAction) · [DestroyPartyAction](../../campaign-ext/DestroyPartyAction) · [战役路线图](../../../architecture/roadmap)
