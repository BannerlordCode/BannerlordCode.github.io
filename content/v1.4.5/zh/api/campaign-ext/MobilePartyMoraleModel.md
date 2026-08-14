---
title: "MobilePartyMoraleModel"
description: "移动队伍士气模型扩展点：声明 CalculateMoraleChange 与 GetMoraleTooltipText 两个抽象钩子，用于计算单次地图事件对队伍士气的影响并生成士气提示文本。注意：1.3.15 / 1.4.5 原版并未把本类注册进 Campaign.Current.Models，实际运行期计算队伍士气的是 PartyMoraleModel。"
---
# MobilePartyMoraleModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MobilePartyMoraleModel : MBGameModel<MobilePartyMoraleModel>`
**Base:** `MBGameModel<MobilePartyMoraleModel>`
**源文件路径:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MobilePartyMoraleModel.cs`

## 一句话职责

这个类型是一份「规则合约」：它声明了「一次地图事件结束后，应该给某支移动队伍叠加多少士气」以及「队伍面板里该显示怎样的士气构成说明」这两个需要被实现的计算点，供上层系统在结算士气时调用。

## 心智模型

`MobilePartyMoraleModel` 属于 Campaign 层的 Model 扩展点（即 `MBGameModel<T>` 体系），它不是一个常驻的、自己跑逻辑的管理器，而是一份被 `GameModels` 容器持有、按需在结算队伍士气时被取出来调用一次的「规则提供者」合约。引擎在初始化一场战役时，会用 `GameModels` 容器通过 `GetGameModel<T>()` 收集所有已注册的游戏模型，并把它们挂到 `Campaign.Current.Models` 上供系统读取；`MobilePartyMoraleModel` 作为其中一份声明，本应被取出后由上层调用。但在 1.3.15 与 1.4.5 的原版构建里，这个类既没有被 SandBox 模块注册进去（不存在 `Campaign.Current.Models.MobilePartyMorale` 这样的属性），也没有任何运行期调用点去读取它——也就是说这份抽象合约虽然在 SDK 中公开存在，原版的实际运行链路并未接上。真正在地图事件结算后、每次查询队伍面板时计算士气构成的是 `PartyMoraleModel`（通过 `Campaign.Current.Models.PartyMoraleModel.GetEffectivePartyMorale` 调用）。

## 何时用 / 何时不要用

**何时用**
- 你正在为某个自定义模块定义一套与第一方完全不同的「地图事件 → 队伍士气」算法，并且你打算把它作为注册进 `GameModels` 的自定义游戏模型（自行实现两个抽象方法并注册）。
- 你希望自己掌控 `GetMoraleTooltipText` 返回的士气提示文案，覆盖默认说明的组成方式。

**何时不要用**
- 你的目标只是「查一支队伍现在士气多少」或「看士气由哪些项构成」——那就直接读 `mobileParty.Morale`（当前值）与 `mobileParty.MoraleExplained`（带各项加减说明的 `ExplainedNumber`），它们最终都走 `PartyMoraleModel`，不要来碰这个类。
- 你的目标只是「临时改一下某支队伍的士气」——不要直接写 `party.Morale` 或自己累加 `RecentEventsMorale`，应当理解士气是 `PartyMoraleModel.GetEffectivePartyMorale` 结合基准值与 `RecentEventsMorale` 累积项算出来的，临时改动会被下一次重算覆盖；要走系统提供的入口或用行为层（Behavior）驱动的事件。
- 不要指望原版已经替你注册好了本类：在 1.3.15 / 1.4.5 中 `GetGameModel<MobilePartyMoraleModel>()` 会返回 `null`，除非你自己注册。

## 依赖

- 上游（持有并取模型的容器）：[Campaign](../../campaign/Campaign) —— `Campaign.Current.Models` 是读取全部游戏模型的唯一入口。
- 下游（实际消费士气的对象）：[MobileParty](../../campaign/MobileParty) —— `Morale`、`MoraleExplained`、`RecentEventsMorale` 是士气结果的最终落点。
- 相关基类（队伍抽象）：[PartyBase](../../campaign/PartyBase) —— 两支队伍（玩家/AI）公用的底层结构。
- 相关事件来源：[MapEvent](../MapEvent) —— 地图战斗/围城等事件会在结算后影响队伍士气。
- 实际生效的同类契约：`PartyMoraleModel`（抽象），由 `DefaultPartyMoraleModel` 实现并在原版中注册到 `Models.PartyMoraleModel`；本类是其「未被原版接上」的兄弟合约。
- 写作与验收约束：[文档契约](../../../architecture/doc-contract)。

## 风险

> 对 Model 扩展点而言，下面这些都会直接带来崩溃或坏档。

- **替换模型时机错误**：`GameModels` 容器在战役初始化阶段收集所有模型；在战役已经开始读取/写入存档之后再替换其中的模型实例，会让后续计算混用旧实例，并且可能在存档序列化时产生类型不一致从而坏档。替换只能发生在模块注册阶段。
- **null 模型**：因为原版并未注册 `MobilePartyMoraleModel`，`Campaign.Current.Models.GetGameModel<MobilePartyMoraleModel>()` 会返回 `null`。任何调用前都必须判空，否则立刻 `NullReferenceException`。
- **误以为士气实时重算**：士气不是每帧刷新的字段。`party.Morale` 是 `PartyMoraleModel` 结合基准值与 `RecentEventsMorale` 累积项算出的结果；你在事件之外手动改写 `party.Morale` 或 `RecentEventsMorale`，会在下一次 `GetEffectivePartyMorale` 计算时被覆盖或破坏累加语义。
- **tick 阶段错位**：若你在 `MapEvent` 结算之外手动调用 `CalculateMoraleChange` 并把结果写回 `RecentEventsMorale`，会破坏事件结算的幂等性（同一事件被叠加两次），导致士气数值异常漂移。
- **抽象成员未实现**：继承本类必须实现 `CalculateMoraleChange` 与 `GetMoraleTooltipText` 两个抽象成员，否则该类型无法被实例化，模块加载阶段会失败。
- **读写存档字段假设**：`RecentEventsMorale` 等是会被存档序列化的状态；在模型方法内直接写入这些字段，等于在「纯计算」的语义里偷偷改了持久化状态，迁移版本或读档时容易出现不一致。

## 主要成员

下面按主题列出对 mod 有意义的公开成员。所有成员都是 `abstract`，即基类不提供实现，必须由被注册的派生类给出。

### 主题一：地图事件后的士气变动计算

#### `float CalculateMoraleChange(MobileParty party)`

- **用途**：返回「本次地图事件结算后」应叠加到 `party` 的士气增量。返回值为 `float`，正数代表提振、负数代表打击；通常结合胜负、伤亡比例、将领特质等得出。
- **副作用**：纯计算，不写入任何字段。不要在实现里直接改 `party.Morale` 或 `party.RecentEventsMorale`——它只负责「算一个数」。
- **何时调用**：按契约应由地图事件结算（如 `MapEvent` 结束、`MapEventParty` 累计战果）在事件收尾时调用一次，以得到本次事件的士气变化，再交由士气系统落账。原版并未接上此调用点，因此实际无运行期调用方。

### 主题二：士气提示文本

#### `TextObject GetMoraleTooltipText(MobileParty party)`

- **用途**：返回 UI 层展示用的士气构成说明（`TextObject`，通常包含各项加减原因的可本地化文本）。它让队伍面板能把「为什么这支队伍士气是这个值」讲清楚。
- **副作用**：只读，返回一个新建的 `TextObject`，不修改 `party` 状态。
- **何时调用**：按契约应在队伍面板 / 士气 tooltip 渲染时调用。原版未接上此调用点。

## 最小真实示例

```csharp
// 真实获取路径：通过 Models 容器的泛型查询。注意原版并未注册本类，可能返回 null，必须判空。
var moraleModel = Campaign.Current.Models.GetGameModel<MobilePartyMoraleModel>();
if (moraleModel != null)
{
    float change = moraleModel.CalculateMoraleChange(mobileParty);
    TextObject tooltip = moraleModel.GetMoraleTooltipText(mobileParty);
}

// 在 1.3.15 / 1.4.5 中查询队伍士气的【正确且真实】入口——走实际生效的 PartyMoraleModel：
ExplainedNumber effectiveMorale = Campaign.Current.Models.PartyMoraleModel
    .GetEffectivePartyMorale(mobileParty, includeDescription: true);
float currentMorale = mobileParty.Morale;
ExplainedNumber tooltipData = mobileParty.MoraleExplained;
```

```csharp
// 如果你想让本类真正生效：在自定义模块里继承并实现，然后在模块注册阶段挂到 Models 容器。
public class MyMobilePartyMoraleModel : MobilePartyMoraleModel
{
    public override float CalculateMoraleChange(MobileParty party)
    {
        // 例：败仗每损失 10% 兵力扣 1 点士气（仅示意真实 API 用法）
        float lossRatio = party.MemberRoster.TotalWoundedPercent;
        return -lossRatio * 10f;
    }

    public override TextObject GetMoraleTooltipText(MobileParty party)
    {
        return new TextObject("{=}自定义士气构成说明");
    }
}
// 注册：在 SubModule 初始化时通过 Campaign.Current.Models 的注册入口登记 MyMobilePartyMoraleModel。
```

## 与原版 PartyMoraleModel 的关系

理解本类最关键的一点：它和真正在跑的 `PartyMoraleModel` 是「名义上同类、运行期地位完全不同」的两份合约。

- `PartyMoraleModel` 是一个抽象类，声明了 `GetEffectivePartyMorale`、`GetStandardBaseMorale`、`GetVictoryMoraleChange`、`GetDefeatMoraleChange`、`GetDailyStarvationMoralePenalty`、`GetDailyNoWageMoralePenalty`、`HighMoraleValue` 等成员，并由 `DefaultPartyMoraleModel` 给出实现；原版在 `GameModels` 初始化时通过 `GetGameModel<PartyMoraleModel>()` 取出并挂到 `Campaign.Current.Models.PartyMoraleModel`。`MobileParty.MoraleExplained` 的 getter 内部直接调用 `Campaign.Current.Models.PartyMoraleModel.GetEffectivePartyMorale(this, true)`，所以玩家在 UI 上看到的士气构成、以及 AI 决策读到的士气，都来自这里。
- 本类 `MobilePartyMoraleModel` 只声明了「单次事件的士气变动」与「提示文本」两个钩子，且原版既没实现也没注册它。它更像一份早期/预留的扩展点声明：如果你要做的是「精细刻画每场地图事件对士气的边际影响」，理论上可以把自己的实现注册进去并让事件结算去读它；但原版事件结算当前读的是 `PartyMoraleModel` 的胜负/饥饿/欠饷等项，并不调用 `MobilePartyMoraleModel.CalculateMoraleChange`。

结论：把本类当作「我想完全接管地图事件士气算法」时的自定义模型基类来用是成立的；但凡是只想查询或微调现有士气，都应面向 `PartyMoraleModel` 与 `MobileParty` 的士气属性，不要依赖本类已被接上的假设。

## 注册与接线要点

若你决定启用本类，必须自己完成「实现 + 注册」两步，否则它永远停留在 `null`：

1. 继承并实现两个抽象方法（见上方最小真实示例中的 `MyMobilePartyMoraleModel`）。
2. 在模块加载早期（战役创建之前）把实例登记进 `Campaign.Current.Models`。`GameModels` 在 `Initialize` 阶段通过 `GetGameModel<T>()` 收集各模型；你登记得越晚，已经被战役读取并缓存的引用就越可能指向旧/空实现。登记时机错误是 Model 类最常见的坏档与崩溃来源，务必在 `MBSubModuleBase` 的初始化入口、且战役尚未启动时完成。
3. 让地图事件结算真正去读它：仅仅注册模型不会自动产生调用点，原版结算代码并不认识本类。你需要用自己的 Behavior 或事件订阅，在 `MapEvent` 结算后调用 `CalculateMoraleChange` 并把结果并入 `party.RecentEventsMorale`，否则注册了也无人调用。

## 导航

- ↑ Parent：[campaign-ext 索引](../)
- ↔ Sibling：（本目录下不存在 `DefaultMobilePartyMoraleModel.md` 页；原版也未提供该默认实现，故此处不链兄弟页）
- 相关类：
  - [Campaign](../../campaign/Campaign) —— `Models` 容器与战役生命周期
  - [MobileParty](../../campaign/MobileParty) —— 士气的消费方（`Morale` / `MoraleExplained` / `RecentEventsMorale`）
  - [PartyBase](../../campaign/PartyBase) —— 队伍抽象基类
  - [MapEvent](../MapEvent) —— 触发士气变化的地图事件
  - [文档契约](../../../architecture/doc-contract) —— 仅手写政策与验收标准
