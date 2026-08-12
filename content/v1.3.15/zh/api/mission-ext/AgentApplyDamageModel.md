---
title: "AgentApplyDamageModel"
description: "战斗 Mission 中伤害计算与命中反应的总闸门：决定一次攻击造成多少伤害、是否被忽略，以及击退/击落/击倒等结果。"
---
# AgentApplyDamageModel

**Namespace:** `TaleWorlds.MountAndBlade.ComponentInterfaces`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public abstract class AgentApplyDamageModel : MBGameModel<AgentApplyDamageModel>`  
**Base:** `MBGameModel<AgentApplyDamageModel>`  
**Source:** `TaleWorlds.MountAndBlade/ComponentInterfaces/AgentApplyDamageModel.cs`  
**Default:** `SandBox.GameComponents.SandboxAgentApplyDamageModel`（Modules.SandBox/SandBox/GameComponents/SandboxAgentApplyDamageModel.cs）

## 一句话职责

`AgentApplyDamageModel` 在战斗 Mission 的一次攻击中统一决定伤害数值如何被放大、缩放、减免与修正，判定该次伤害是否被忽略，并决定命中后是否击退、击落、击倒或使坐骑受惊——它是连接“攻击输入”与“Agent 生命/死亡/士气”的总闸门。

## 心智模型

把 `AgentApplyDamageModel` 想象成**“战斗里的一台伤害计算机”**：它不负责把数值写进 `Agent.Health`，而是算出“应该造成多少”，再由 `Mission` 的战斗代码把结果落到 Agent 身上、并触发死亡与 [`BattleMoraleModel`](../BattleMoraleModel/) 的士气变化。

生命周期与控制流如下：

- **持有者**：所有 Mission 模型由 `MissionGameModels`（继承自 `GameModelsManager`）集中持有，运行时通过静态单例 `MissionGameModels.Current.AgentApplyDamageModel` 访问。构造 `MissionGameModels` 时 `Current = this`，Mission 结束时 `MissionGameModels.Clear()` 把 `Current` 置空。
- **所在层**：Mission 战斗层，不是战役层。它在每帧战斗结算（近战命中、导弹碰撞、被动攻击）时被 `Mission` 调用，贯穿整个战斗 tick。
- **管线顺序**：唯一的“骨架”方法是 `CalculateDamage(...)`，它本身不是抽象的，会按固定顺序把工作派发给抽象方法，最后用 `MathF.Max(0f, ...)` 夹紧：

```text
一次攻击进入 CalculateDamage(baseDamage)
  └─ IsDamageIgnored?            → 返回 true 则整段伤害归 0
  └─ ApplyDamageAmplifications  → 技能/Perk/旗帜的增幅（ExplainedNumber）
  └─ ApplyDamageScaling         → 场景规则缩放（如突围战对攻城器的 4.5 倍）
  └─ ApplyDamageReductions      → 减伤 Perk / 旗帜
  └─ ApplyGeneralDamageModifiers→ AgentDrivenProperties 乘区
  └─ MathF.Max(0, result)       → 不会出现负伤害
```

- **替换规则**：模型在 `MBSubModuleBase.OnGameStart` 中通过 `starterObject.AddModel<AgentApplyDamageModel>(new MyModel())` 注册。`GameModelsManager.GetGameModel<T>()` 从列表**末尾向前**查找，因此**后注册（模块加载顺序靠后）的同类型模型会覆盖先注册的**——这让你能在自己的模块里覆盖 SandBox 的默认实现。

需要改变“伤害规则”时替换/继承这个 Model；需要改变 Agent 当前血量时，应直接操作 `Agent.Health` 或调用 `*Action`，**不要**在模型回调里写 `agent.Health`（那会绕过死亡/士气管线，见 [风险](#风险)）。

### 注册与调用者

- 默认 `SandboxAgentApplyDamageModel` 由 `SandBoxSubModule.OnGameStart` 通过 `AddModel<AgentApplyDamageModel>(new SandboxAgentApplyDamageModel())` 注册。
- `Mission.cs` 在近战命中、导弹碰撞、被动攻击等路径里大量调用 `MissionGameModels.Current.AgentApplyDamageModel.*`（如 `CalculateDamage`、`DecideAgentKnockedDownByBlow`、`DecideMissileWeaponFlags`）。
- 自定义逻辑最常放在 `MissionBehavior` 中读取模型，或在一个子类里重写某一阶段。

## 何时用 / 何时不要用

**用它**：

- 想系统性调整伤害公式（全局增减、按武器/技能/阵营加成）。
- 想改变命中反应规则（可否击退、击落、击倒、坐骑受惊、盾破后导弹是否穿透）。
- 想改变“部位伤害倍率”或“友好火力忽略”的判定。

**不要用它 / 注意**：

- 不要直接对 `Agent.Health` 做加减来“造成一次合规伤害”——这不会经过死亡判定与 [`BattleMoraleModel`](../BattleMoraleModel/)，应该用 `Agent.ApplyDamage` / 引擎命中路径，或改写模型让引擎落值。
- 不要在模型方法里缓存或更改与本次伤害无关的世界状态；模型方法在战斗热路径上被高频调用。
- 不要假设 `Mission.Current` 一定非空：默认实现 `ApplyDamageScaling` 直接读取 `Mission.Current.IsSallyOutBattle`，自定义重写若用 `Mission.Current` 必须先判空。
- 已死亡/已移除的 Agent：`OnAgentRemoved` 之后它的引用会失效，向其派发伤害只会得到无意义结果或空引用。

## 依赖图

| Type | Relation |
| --- | --- |
| [`Mission`](../../mission/Mission/) | 持有战斗场景，并在每帧命中结算中调用本模型；`Mission.Current` 常在模型内部被读取。 |
| [`Agent`](../../mission/Agent/) | 攻击的施加者与承受者；模型方法以 `Agent` 入参判断技能/马匹/队伍，结果最终落到 `Agent.Health`。 |
| [`MissionBehavior`](../../mission/MissionBehavior/) | 最常见的自定义入口：在行为里读取模型或配合命中事件使用。 |
| [`Team`](../../mission/Team/) | 模型用 `Agent.Team` 区分攻防阵营、读取队长 Perk 与阵营旗帜加成。 |
| [`BattleMoraleModel`](../BattleMoraleModel/) | 下游消费者：本模型算出的致命伤会触发死亡，进而驱动队伍士气变化。 |
| [`Campaign`](../../campaign/Campaign/) | 模型内部（如 SandBox 默认）会读取 `Campaign.Current.Models.CharacterDevelopmentModel` 的史诗 Perk 阈值。 |
| [`MBGameManager`](../MBGameManager/) | 模型经 `MBSubModuleBase.OnGameStart` → `AddModel` 注册，由游戏启动流程装载。 |
| [`MissionLogic`](../MissionLogic/) | 另一类 Mission 层逻辑扩展，可与本模型配合使用。 |

## 风险

1. **`MissionGameModels.Current` 为空**：在标题界面、Mission 初始化前、`MissionGameModels.Clear()` 之后（Mission 结束）调用模型方法会空引用。任何模型调用前先判 `MissionGameModels.Current != null`，在 `MissionBehavior` 里也要先判 `Mission.Current != null`。
2. **`Mission.Current` 在自定义重写里为空**：默认 `ApplyDamageScaling` 直接访问 `Mission.Current.IsSallyOutBattle`。你的子类若同样读取场景状态，必须先判空，否则 Mission 收尾阶段会 NRE。
3. **Model 在战斗中“热替换”**：`Current` 在 `MissionGameModels` 构造时被重赋值；如果两个 Mission 的生命周期意外重叠或你在战斗中重新 `AddModel`，正在进行的 `CalculateDamage` 派发会跳到新实例，造成数值跳变或递归。模型应在 `OnGameStart` 一次性注册。
4. **NaN / 负数污染**：模型返回 `float`，若你的重写产生 `NaN` 或极小值，`MathF.Max(0, ...)` 只夹紧下限不处理 `NaN`（`NaN > 0` 为 false，会原样返回），导致 Agent 血量与后续比较异常。始终保证返回有限非负数。
5. **绕过死亡/士气管线**：在模型外部直接改 `Agent.Health` 来“造成击杀”会使 [`BattleMoraleModel`](../BattleMoraleModel/) 与战果统计收不到事件，产生坏数据式的不一致。
6. **对已死亡/已移除 Agent 作用**：`OnAgentRemoved` 之后 Agent 可能已被回收，向其再派发伤害或读取 `Agent.Team`/`Character` 会得到空引用或错乱结果。
7. **`in`/`ref` 只读结构体**：`AttackInformation` 与 `AttackCollisionData` 以 `in` 传入且为只读结构体，重写时只能用 `in` 接收；试图复制并修改其字段无效。
8. **存档无关但影响重放**：本模型不参与存档序列化，但伤害规则差异会改变战斗结果与阵亡英雄，间接影响 [`Campaign`](../../campaign/Campaign/) 的存档数据一致性。

## 成员（按主题分组）

> 全部为 `public abstract`（除 `CalculateDamage` 为具体编排方法）。下表给出**用途 + 副作用/时机**，而非签名墙。

### 伤害数值管线

引擎通过 `CalculateDamage` 串起下面这一段；其余方法是各阶段的抽象钩子，由默认实现填入 Perk/旗帜/技能逻辑。

| 成员 | 用途 | 副作用 / 时机 |
| --- | --- | --- |
| `CalculateDamage` | 唯一具体方法：依次调用下方四个阶段并夹紧到 ≥0；若 `IsDamageIgnored` 直接返回 0。 | 自身不改 Agent 状态；在 `Mission` 命中结算时调用。 |
| `IsDamageIgnored` | 判定本次攻击是否完全无效（如帕维斯盾 Perk 概率免伤）。 | 返回 `true` 时整段伤害归零。 |
| `ApplyDamageAmplifications` | 增幅阶段：技能、队长 Perk、阵营旗帜的加伤（用 `ExplainedNumber` 累加）。 | 沙盒默认按武器技能（单手/双手/长杆/弓/弩/投掷）分支加 Perk。 |
| `ApplyDamageScaling` | 场景级缩放：如突围战中对攻城器械造成 4.5 倍伤害。 | 默认直接读 `Mission.Current.IsSallyOutBattle`，需 `Mission.Current` 非空。 |
| `ApplyDamageReductions` | 减伤阶段：减伤 Perk、旗帜、盾墙等。 | 与增幅对称，作用于同一基值之后。 |
| `ApplyGeneralDamageModifiers` | 通用乘区：按 `AgentDrivenProperties` 的伤害乘子缩放。 | 沙盒把近战/投掷武器与角色驱动属性乘入结果。 |
| `CalculateAlternativeAttackDamage` | 计算“替代攻击”（如踢击/徒手）的基础伤害。 | 沙盒按武器类返回 1~2。 |
| `CalculatePassiveAttackDamage` | 计算被动攻击（马踏等）伤害。 | 沙盒在盾挡时套用长杆 Perk 倍率。 |
| `CalculateShieldDamage` | 计算对盾牌本身的耐久伤害。 | 沙盒按受害者阵营旗帜减伤。 |
| `GetDamageMultiplierForBodyPart` | 按部位 + 伤害类型返回伤害倍率（如头部对钝器放大）。 | 纯查询，无副作用；被命中结算用于放大/缩小。 |
| `CalculateStaggerThresholdDamage` | 计算使目标“踉跄”所需的伤害阈值。 | 沙盒综合受击者 Perk 与管理参数。 |

### 命中反应决策

| 成员 | 用途 | 副作用 / 时机 |
| --- | --- | --- |
| `DecideCrushedThrough` | 判定攻击是否“穿透”防御（破防）。 | 沙盒按攻击能量阈值（默认 58，盾 +20%）决定。 |
| `DecideWeaponCollisionReaction` | 决定武器碰撞反应（弹开/卡住等）。 | 默认委托 `MissionCombatMechanicsHelper`。 |
| `DecidePassiveAttackCollisionReaction` | 被动攻击（马踏）的碰撞反应。 | 致命且骑马时有概率穿刺。 |
| `DecideAgentShrugOffBlow` | 判定目标是否“硬抗”掉这次打击（不掉状态）。 | 默认委托 `MissionCombatMechanicsHelper`。 |
| `DecideAgentDismountedByBlow` | 是否把骑手击落马。 | 默认委托 Helper，结合部位/武器 Perk。 |
| `DecideAgentKnockedBackByBlow` | 是否击退。 | 默认委托 Helper。 |
| `DecideAgentKnockedDownByBlow` | 是否击倒。 | 默认委托 Helper。 |
| `DecideMountRearedByBlow` | 坐骑是否受惊直立。 | 默认委托 Helper。 |
| `CalculateDefendedBlowStunMultipliers` | 计算攻防双方的硬直时长乘子。 | 沙盒在猛击 Perk 下延长攻击者硬直。 |

### 击退 / 击落穿透与动量

| 成员 | 用途 | 副作用 / 时机 |
| --- | --- | --- |
| `GetDismountPenetration` | 击落穿透值（越高越易落马）。 | 沙盒按武器 Perk（长杆支架/弩锤/投掷击落）累加。 |
| `GetKnockBackPenetration` | 击退穿透值。 | 沙盒在长杆“保持距离”Perk 下加成。 |
| `GetKnockDownPenetration` | 击倒穿透值。 | 沙盒按武器类与部位（头/躯干）累加。 |
| `GetHorseChargePenetration` | 马冲穿透值。 | 沙盒固定返回 0.4。 |
| `DecideMissileWeaponFlags` | 改写导弹武器标志（如投掷穿刺）。 | 沙盒在投掷 Perk 下设置对应 `WeaponFlags`。 |
| `ShouldMissilePassThroughAfterShieldBreak` | 盾破后导弹是否继续穿透。 | 沙盒固定返回 `false`。 |
| `CalculateRemainingMomentum` | 计算命中后剩余动量。 | 默认转调 `CalculateDefaultRemainingMomentum`（破防 0.3 倍等）。 |

### 武器能力判定

| 成员 | 用途 | 副作用 / 时机 |
| --- | --- | --- |
| `CanWeaponIgnoreFriendlyFireChecks` | 武器是否忽略友伤检测。 | 沙盒按特定 `WeaponFlags` 组合判定。 |
| `CanWeaponDealSneakAttack` | 是否可触发偷袭（背刺）。 | 沙盒按受害者 AI 状态/朝向判定。 |
| `CanWeaponDismount` | 武器是否能击落。 | 沙盒按部位、打击类型、Perk 判定。 |
| `CanWeaponKnockback` | 武器是否能击退。 | 沙盒按部位与武器标志判定。 |
| `CanWeaponKnockDown` | 武器是否能击倒。 | 沙盒按武器类/部位/甜点碰撞判定。 |

### 海战（v1.4.5 起）

| 成员 | 用途 | 副作用 / 时机 |
| --- | --- | --- |
| `CalculateSailFireDamage` | 帆着火伤害。 | 沙盒原样返回基础值。 |
| `CalculateHullFireDamage` | 船体着火伤害。 | 沙盒用 `ExplainedNumber` 包裹返回。 |

## 示例

### 示例 1：在 SubModule 中注册自定义伤害模型

模型通过 `MBSubModuleBase.OnGameStart` 的 `AddModel` 注册；后注册的同类模型会覆盖先注册的默认实现。

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.ComponentInterfaces;

public class MySubModule : MBSubModuleBase
{
    protected override void OnGameStart(Game game, IGameStarter starterObject)
    {
        base.OnGameStart(game, starterObject);
        // 用你自己的实现覆盖默认伤害模型（模块加载顺序在后即生效）
        starterObject.AddModel<AgentApplyDamageModel>(new GlassCannonDamageModel());
    }
}
```

### 示例 2：继承默认实现，只改“增幅”阶段

直接继承 `SandboxAgentApplyDamageModel` 可复用沙盒的全部 Perk/旗帜逻辑，只重写你想调整的阶段；运行时在任何 `MissionBehavior` 里都能读到当前模型实例。

```csharp
using SandBox.GameComponents;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.ComponentInterfaces;

// 只把“增幅”阶段改为：玩家队伍的人类攻击 +20% 伤害，其余沿用 SandBox 默认
public class GlassCannonDamageModel : SandboxAgentApplyDamageModel
{
    public override float ApplyDamageAmplifications(
        in AttackInformation attackInformation,
        in AttackCollisionData collisionData,
        float baseDamage)
    {
        float damage = base.ApplyDamageAmplifications(in attackInformation, in collisionData, baseDamage);
        if (attackInformation.IsAttackerAgentHuman &&
            attackInformation.AttackerAgent?.Team == Mission.Current?.PlayerTeam)
        {
            damage *= 1.2f;
        }
        return damage;
    }
}
```

在 `MissionBehavior` 中读取模型、查看部位倍率（模型实例经 `MissionGameModels.Current` 获取）：

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.ComponentInterfaces;
using TaleWorlds.Core;

public class HeadshotInspector : MissionBehavior
{
    public override MissionBehaviorType BehaviorType => MissionBehaviorType.Other;

    public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent,
        in MissionWeapon weapon, in Blow blow, in AttackCollisionData data)
    {
        AgentApplyDamageModel model = MissionGameModels.Current?.AgentApplyDamageModel;
        if (model == null) return;

        // 沙盒默认实现里，头部受钝器伤害的部位倍率大于躯干（>1）
        float headBluntMult = model.GetDamageMultiplierForBodyPart(
            BoneBodyPartType.Head, DamageTypes.Blunt, isHuman: true, isMissile: false);
        if (headBluntMult > 1f)
        {
            InformationManager.DisplayMessage(
                new InformationMessage($"头部钝器倍率 = {headBluntMult}"));
        }
    }
}
```

## 导航

- ↑ [父级：mission-ext 索引](../)
- ↔ [同级：MBGameManager](../MBGameManager/)
- ↔ [同级：MissionLogic](../MissionLogic/)
- [Mission](../../mission/Mission/)
- [Agent](../../mission/Agent/)
- [Team](../../mission/Team/)
- [MissionBehavior](../../mission/MissionBehavior/)
- [BattleMoraleModel](../BattleMoraleModel/)
- [Campaign](../../campaign/Campaign/)
