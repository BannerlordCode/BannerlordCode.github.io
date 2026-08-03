---
title: "PartyTransitionModel"
description: "计算移动部队登船、离船和舰队到达据点时间的可替换策略，不直接移动队伍或修改航海状态。"
---

# PartyTransitionModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class PartyTransitionModel : MBGameModel<PartyTransitionModel>`  
**Base:** `MBGameModel<PartyTransitionModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyTransitionModel.cs`  
**Default implementation:** `TaleWorlds.CampaignSystem.GameComponents/DefaultPartyTransitionModel.cs`

## 一句话职责

`PartyTransitionModel` 为 `MobileParty` 的登船、离船和舰队前往据点提供 `CampaignTime` 时长；它只给导航状态机一个时间，不直接改变位置、船只或据点归属。

## 心智模型

这是海上导航状态机的时间策略。`MobileParty.NavigationTransitionStartTime` 在开始转换时从 `Campaign.Current.Models.PartyTransitionModel` 读取登船或离船时长，并把时间保存在队伍的导航状态中。`AnchorPoint.CallFleet` 则查询舰队到目标 `Settlement` 的时间；返回 `CampaignTime.Zero` 表示可以立即到达，默认实现对三种路径都返回 `CampaignTime.Never`，代表当前版本没有额外过渡时间。

模型不负责启动转换、不更新 `Position`，也不保存船队路线。替换实现应只返回确定的时间值，让已有的 `MobileParty`/`AnchorPoint` 状态机负责推进和存档。

## 何时使用，何时不要用

- 想为海上登船、离船或舰队靠港增加真实时间时，替换模型并在战役启动阶段注册。
- 想读取当前规则进行路线预览时，通过 `Campaign.Current.Models.PartyTransitionModel` 查询。
- 不要在模型里调用 `SetPosition`、直接改 `NavigationTransitionStartTime`，或创建 `AnchorPoint`；这些操作会绕过导航状态机。
- 不要返回负时间或在不同查询中用随机值；同一个转换会被重复读取，时间必须稳定且可序列化。

## 依赖关系

- [Campaign](../../campaign/Campaign) 和 [GameModels](../GameModels) 持有已注册的过渡策略。
- [MobileParty](../../campaign/MobileParty) 读取登船/离船时长并保存导航转换开始时间和持续时间。
- `Settlement` 提供舰队靠港目标及港口位置；`AnchorPoint` 读取到达时间并决定立即停靠还是等待。
- `CampaignTime` 是持久化和比较时使用的时间值，不应以普通 `float` 代替。

## 成员与调用时机

| 成员 | 用途与时机 | 副作用边界 |
|---|---|---|
| `GetTransitionTimeForEmbarking(MobileParty)` | 队伍从陆地开始登船、设置导航转换时读取。 | 只返回持续时间。 |
| `GetTransitionTimeDisembarking(MobileParty)` | 海上队伍开始离船时读取。 | 不更新队伍海上标志或位置。 |
| `GetFleetTravelTimeToSettlement(MobileParty, Settlement)` | 舰队调用目标据点时读取；零时间会让 `AnchorPoint` 立即设置据点。 | 不移动队伍、不设置到达事件。 |

## 真实查询示例

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;

MobileParty party = MobileParty.MainParty;
PartyTransitionModel transitions = Campaign.Current.Models.PartyTransitionModel;
CampaignTime embarkTime = transitions.GetTransitionTimeForEmbarking(party);
CampaignTime disembarkTime = transitions.GetTransitionTimeDisembarking(party);
```

这只是读取规则。真正的 `NavigationTransitionStartTime` 写入和持续时间保存由 `MobileParty` 的导航状态机执行；如果要修改到港逻辑，应同时检查 `AnchorPoint.CallFleet` 对 `CampaignTime.Zero`、`Never` 和未来时间的处理。

## 风险与排错

1. 返回 `CampaignTime.Never` 会让依赖到达时间的舰队路径永远不完成；返回零则会绕过等待。替换模型必须明确这两个值的业务含义。
2. 在模型中改队伍位置或导航字段会与 `MobileParty` 的 SaveableProperty 写入竞争，读档后可能出现海上标志、位置和到达时间不一致。
3. `GetFleetTravelTimeToSettlement` 的目标必须有有效港口/据点状态；不要在模型中创建临时据点，也不要缓存已销毁的 `Settlement` 引用。
4. 模型可能被路线预览和实际导航分别查询，随机或依赖帧时间的返回会让同一队伍产生不同到达日。
5. 过渡时间属于策略，不是存档状态。自定义持久化路线应由 Behavior/导航对象保存，不能依赖模型实例寿命。

## 导航

- [父级：campaign-ext](../)
- [模型家族手册](../models/)
- [Sibling: PartySpeedModel](../PartySpeedModel) · [MobilePartyAIModel](../MobilePartyAIModel)
- [Related: Campaign](../../campaign/Campaign) · [GameModels](../GameModels) · [MobileParty](../../campaign/MobileParty)
