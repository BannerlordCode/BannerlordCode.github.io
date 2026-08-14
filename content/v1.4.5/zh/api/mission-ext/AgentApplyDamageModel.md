---
title: "AgentApplyDamageModel"
description: "战斗 Mission 中单次攻击的伤害计算与命中反应总闸门：决定伤害如何被放大、缩放、减免、修正，以及是否触发击退、击落、击倒或坐骑受惊。"
---
# AgentApplyDamageModel

**命名空间:** `TaleWorlds.MountAndBlade.ComponentInterfaces`  
**模块:** `TaleWorlds.MountAndBlade`  
**类型:** `public abstract class AgentApplyDamageModel : MBGameModel<AgentApplyDamageModel>`  
**基类:** `MBGameModel<AgentApplyDamageModel>`  
**源文件:** `TaleWorlds.MountAndBlade/ComponentInterfaces/AgentApplyDamageModel.cs`  
**默认实现:** `SandBox.GameComponents.SandboxAgentApplyDamageModel`（`Modules.SandBox/SandBox/GameComponents/SandboxAgentApplyDamageModel.cs`）

## 一句话职责

它在战斗 Mission 的“一次攻击”里统一决定：伤害应被忽略还是生效，数值如何被放大、缩放、减免与修正，以及命中后是否击退、击落、击倒或使坐骑受惊——它是连接“攻击输入”与“Agent 生命 / 死亡 / 士气”的总闸门。它只算“应该造成多少”，不负责把数值写进 `Agent.Health`。

## 心智模型

把它想象成**战斗里的一台伤害计算机**：`Mission` 在近战命中、导弹碰撞、被动攻击等路径里调用它，把结果落到 Agent 身上，并触发死亡与 [`BattleMoraleModel`](../BattleMoraleModel/) 的士气变化。

生命周期与控制流如下：

- **持有者**：Mission 层模型由 `MissionGameModels`（继承自 `GameModelsManager`）集中持有，运行时通过静态单例 `MissionGameModels.Current.AgentApplyDamageModel` 访问。**注意：Mission 模型在 `MissionGameModels.Current` 上，不在 `Campaign.Current.Models` 上**——战役模型与 Mission 模型是两套注册表。
- **所在层**：Mission 战斗层，不是战役层。它在每帧战斗结算时被 `Mission` 调用，贯穿整个战斗 tick。
- **唯一骨架 `CalculateDamage`**：它本身不是抽象的，按固定顺序把工作派发给抽象方法，最后用 `MathF.Max(0f, …)` 夹紧：

```text
一次攻击进入 CalculateDamage(baseDamage)
  └─ IsDamageIgnored?             → 返回 true 则整段伤害归 0
  └─ ApplyDamageAmplifications   → 技能 / Perk / 旗帜的增幅（ExplainedNumber）
  └─ ApplyDamageScaling          → 场景规则缩放（如突围战对攻城器的 4.5 倍）
  └─ ApplyDamageReductions       → 减伤 Perk / 旗帜
  └─ ApplyGeneralDamageModifiers → AgentDrivenProperties 乘区
  └─ MathF.Max(0, result)        → 不会出现负伤害
```

- **替换规则**：模型在 `MBSubModuleBase.OnGameStart` 中通过 `starterObject.AddModel<AgentApplyDamageModel>(new MyModel())` 注册。`GetGameModel<T>()` 从列表末尾向前查找，因此**后注册（模块加载顺序靠后）的同类型模型会覆盖先注册的**——让你能在自己的模块里覆盖 SandBox 的默认实现。

需要改变“伤害规则”时替换 / 继承这个 Model；需要改变 Agent 当前血量时，应走引擎命中路径（`Agent.ApplyDamage` 等），**不要**在模型回调里直接写 `agent.Health`——那会绕过死亡 / 士气管线。

### 生命周期与注册

- 默认 `SandboxAgentApplyDamageModel` 由 `SandBoxSubModule.OnGameStart` 通过 `AddModel<AgentApplyDamageModel>(new SandboxAgentApplyDamageModel())` 注册；你自己的模块若依赖 SandBox，则 `OnGameStart` 在它之后运行，此时默认实现已存在。
- `Mission.cs` 在近战命中、导弹碰撞、被动攻击等路径里大量调用 `MissionGameModels.Current.AgentApplyDamageModel.*`（如 `CalculateDamage`、`DecideAgentKnockedDownByBlow`、`DecideMissileWeaponFlags`）。
- 自定义逻辑最常放在 [`MissionBehavior`](../../mission/MissionBehavior/) 中读取模型，或在一个子类里重写某一阶段。
- `MissionGameModels.Current` 仅在活跃 Mission 内非空；Mission 未开始、已结束（`MissionGameModels` 被清理）或标题界面下读取会空引用。

### 何时用

- 想系统性调整伤害公式（全局增减、按武器 / 技能 / 阵营加成）。
- 想改变命中反应规则（可否击退、击落、击倒、坐骑受惊、盾破后导弹是否穿透）。
- 想改变“部位伤害倍率”或“友好火力忽略”的判定。

### 何时不要用

- **不要在回调里读写战役状态或存档**：这些方法是 Mission 生命周期的热路径，禁止在其中访问 `Campaign.Current.*` 的写入、创建 / 销毁 `Agent`、或读取任何存档数据（`SaveManager` / 序列化字段）。伤害规则必须确定性且廉价。
- **不要直接改 `Agent.Health`**：在模型外部直接改血量来“造成击杀”会使死亡 / 士气事件收不到，产生坏数据式的不一致。
- **不要假设 `Mission.Current` 一定非空**：默认实现 `ApplyDamageScaling` 直接读 `Mission.Current.IsSallyOutBattle`；自定义重写若用 `Mission.Current` 必须先判空。
- **不要对已死亡 / 已移除的 Agent 作用**：`OnAgentRemoved` 之后引用失效，向其再派发伤害只会得到空引用或错乱结果。

## 依赖图

### 上游

| 类型 | 关系 |
| --- | --- |
| [`Mission`](../../mission/Mission/) | 持有战斗场景，命中结算中调用本模型；`Mission.Current` 常在默认实现内部被读取。 |
| [`Agent`](../../mission/Agent/) | 攻击 / 承受双方；模型以 `Agent` 入参判断技能、马匹、队伍，结果最终落到 `Agent.Health`。 |
| [`AttackInformation`](../AttackInformation/) | `in` 只读结构体，承载攻防双方、武器、阵营、是否爆头 / 盾挡等命中上下文。 |
| [`AttackCollisionData`](../AttackCollisionData/) | `in` 只读结构体，承载碰撞细节（部位、是否盾挡、是否马冲等）。 |
| [`Blow`](../Blow/) | 已结算的打击数据；`CalculateStaggerThresholdDamage` 与各类 `Decide*` 以 `in Blow` 入参。 |
| [`WeaponComponentData`](../../core-extra/WeaponComponentData/) | 武器用法数据；用于判断技能、是否消耗品 / 近战 / 长杆。 |
| [`WeaponFlags`](../../core-extra/WeaponFlags/) | 武器标志位；`DecideMissileWeaponFlags` 以 `ref` 改写，`CanWeaponIgnoreFriendlyFireChecks` 以只读判断。 |
| [`DamageTypes`](../../core-extra/DamageTypes/) | 伤害类型（钝 / 切 / 刺 / 兽）；`GetDamageMultiplierForBodyPart` 按类型取倍率。 |
| [`BoneBodyPartType`](../BoneBodyPartType/) | 受击部位枚举；部位倍率与击落 / 击退判定的核心入参。 |
| [`CombatCollisionResult`](../CombatCollisionResult/) | 攻防碰撞结果；`CalculateDefendedBlowStunMultipliers` 入参。 |
| [`MissionWeapon`](../MissionWeapon/) | 武器快照；多个方法以 `in` / `ref` 传入。 |
| [`IShipOrigin`](../../core-extra/IShipOrigin/) | 海战船体来源；帆 / 船体着火伤害计算的入参。 |
| [`BasicCharacterObject`](../../campaign/CharacterObject/) | 角色数据；默认实现借此读取 Perk / 技能 / 文化。 |

### 下游

| 类型 | 关系 |
| --- | --- |
| [`MissionBehavior`](../../mission/MissionBehavior/) | 最常见的自定义入口：在行为里读取模型或配合命中事件使用。 |
| [`Formation`](../../mission/Formation/) | 模型用 `Agent.Formation` 读取队长 Perk 与阵营旗帜加成。 |
| [`Team`](../../mission/Team/) | 区分攻防阵营，决定 Perk / 旗帜是否生效。 |
| [`BattleMoraleModel`](../BattleMoraleModel/) | 下游消费者：本模型算出的致命伤触发死亡，进而驱动队伍士气变化。 |

### Action、事件与存档边界

- 本模型不派发事件、不读写存档；伤害结果由 `Mission` 战斗代码落到 `Agent.Health` 并触发死亡 / 士气。
- 回调运行在 Mission 生命周期内、战斗热路径上，必须确定性且廉价；**禁止**在其中创建 / 销毁 `Agent`、写入战役状态或访问存档数据。
- 伤害规则差异会间接改变战斗结果与阵亡英雄，从而影响战役存档一致性——不要因为“模型不参与序列化”就随意引入不确定性（如读随机状态、时间戳）。

## 风险与调试

1. **`MissionGameModels.Current` 为空**：在标题界面、Mission 初始化前、或 Mission 已结束（管理器被清理）后调用模型方法会空引用。任何模型调用前先判 `MissionGameModels.Current != null`，在 `MissionBehavior` 里也要先判 `Mission.Current != null`。
2. **`Mission.Current` 在自定义重写里为空**：默认 `ApplyDamageScaling` 直接访问 `Mission.Current.IsSallyOutBattle`。子类若同样读取场景状态，必须先判空，否则 Mission 收尾阶段会 NRE。
3. **热替换导致递归 / 跳变**：`Current` 在 `MissionGameModels` 构造时被重赋值。若你在战斗中重新 `AddModel`，正在进行的 `CalculateDamage` 派发会跳到新实例，造成数值跳变或（若新实例又调 `MissionGameModels.Current`）无限递归。模型应在 `OnGameStart` 一次性注册，并用构造期持有的 `_vanilla` 委托而非再次查 `Current`。
4. **NaN / 负数污染**：`CalculateDamage` 用 `MathF.Max(0, …)` 只夹紧下限，不处理 `NaN`（`NaN > 0` 为 false，会原样返回）。重写必须始终返回有限非负数。
5. **绕过死亡 / 士气管线**：模型外部直接改 `Agent.Health` 来“造成击杀”会使 [`BattleMoraleModel`](../BattleMoraleModel/) 与战果统计收不到事件，产生坏数据式不一致。
6. **对已死亡 / 已移除 Agent 作用**：`OnAgentRemoved` 之后 Agent 可能已被回收，向其再派发伤害或读取 `Agent.Team` / `Character` 会得到空引用或错乱结果。
7. **`in` / `ref` 只读结构体**：`AttackInformation` 与 `AttackCollisionData` 以 `in` 传入且为只读结构体，重写只能用 `in` 接收；试图复制并修改其字段无效。`DecideMissileWeaponFlags`、`CalculateDefendedBlowStunMultipliers`、`DecideWeaponCollisionReaction` 等带 `ref` / `out` 参数，必须按签名原样转发。

## 成员契约

> 除 `CalculateDamage`（具体编排方法）外，其余均为 `public abstract`。下表按主题给出**用途 + 调用时机 / 副作用**，而非签名墙。

### 伤害数值管线

引擎通过 `CalculateDamage` 串起下面这一段；其余方法是各阶段的抽象钩子，由默认实现填入 Perk / 旗帜 / 技能逻辑。

| 成员 | 用途 | 调用时机与副作用 |
| --- | --- | --- |
| `CalculateDamage` | 唯一具体方法：依次调用下方四个阶段并夹紧到 ≥0；若 `IsDamageIgnored` 直接返回 0。 | 自身不改 Agent 状态；在 `Mission` 命中结算时调用。 |
| `IsDamageIgnored` | 判定本次攻击是否完全无效（如帕维斯盾 Perk 概率免伤）。 | 返回 `true` 时整段伤害归零。 |
| `ApplyDamageAmplifications` | 增幅阶段：技能、队长 Perk、阵营旗帜的加伤（用 `ExplainedNumber` 累加）。 | 沙盒默认按武器技能（单手 / 双手 / 长杆 / 弓 / 弩 / 投掷）分支加 Perk。 |
| `ApplyDamageScaling` | 场景级缩放：如突围战中对攻城器械造成 4.5 倍伤害。 | 默认直接读 `Mission.Current.IsSallyOutBattle`，需 `Mission.Current` 非空。 |
| `ApplyDamageReductions` | 减伤阶段：减伤 Perk、旗帜、盾墙等。 | 与增幅对称，作用于同一基值之后。 |
| `ApplyGeneralDamageModifiers` | 通用乘区：按 `AgentDrivenProperties` 的伤害乘子缩放。 | 沙盒把近战 / 投掷武器与角色驱动属性乘入结果。 |
| `CalculateAlternativeAttackDamage` | 计算“替代攻击”（如踢击 / 徒手）的基础伤害。 | 沙盒按武器类返回 1~2。 |
| `CalculatePassiveAttackDamage` | 计算被动攻击（马踏等）伤害。 | 沙盒在盾挡时套用长杆 Perk 倍率。 |
| `CalculateShieldDamage` | 计算对盾牌本身的耐久伤害。 | 沙盒按受害者阵营旗帜减伤。 |
| `GetDamageMultiplierForBodyPart` | 按部位 + 伤害类型返回伤害倍率（如头部对钝器放大）。 | 纯查询，无副作用；被命中结算用于放大 / 缩小。 |
| `CalculateStaggerThresholdDamage` | 计算使目标“踉跄”所需的伤害阈值。 | 沙盒综合受击者 Perk 与管理参数。 |

### 命中反应决策

| 成员 | 用途 | 调用时机与副作用 |
| --- | --- | --- |
| `DecideCrushedThrough` | 判定攻击是否“穿透”防御（破防）。 | 沙盒按攻击能量阈值（默认 58，盾 +20%）决定。 |
| `DecideWeaponCollisionReaction` | 决定武器碰撞反应（弹开 / 卡住等），`out MeleeCollisionReaction`。 | 默认委托 `MissionCombatMechanicsHelper`。 |
| `DecidePassiveAttackCollisionReaction` | 被动攻击（马踏）的碰撞反应。 | 致命且骑马时有概率穿刺。 |
| `DecideAgentShrugOffBlow` | 判定目标是否“硬抗”掉这次打击（不掉状态）。 | 默认委托 `MissionCombatMechanicsHelper`。 |
| `DecideAgentDismountedByBlow` | 是否把骑手击落马。 | 默认委托 Helper，结合部位 / 武器 Perk。 |
| `DecideAgentKnockedBackByBlow` | 是否击退。 | 默认委托 Helper。 |
| `DecideAgentKnockedDownByBlow` | 是否击倒。 | 默认委托 Helper。 |
| `DecideMountRearedByBlow` | 坐骑是否受惊直立。 | 默认委托 Helper。 |
| `CalculateDefendedBlowStunMultipliers` | 计算攻防双方的硬直时长乘子（`ref float`）。 | 沙盒在猛击 Perk 下延长攻击者硬直。 |

### 穿透与动量

| 成员 | 用途 | 调用时机与副作用 |
| --- | --- | --- |
| `GetDismountPenetration` | 击落穿透值（越高越易落马）。 | 沙盒按武器 Perk（长杆支架 / 弩锤 / 投掷击落）累加。 |
| `GetKnockBackPenetration` | 击退穿透值。 | 沙盒在长杆“保持距离”Perk 下加成。 |
| `GetKnockDownPenetration` | 击倒穿透值。 | 沙盒按武器类与部位（头 / 躯干）累加。 |
| `GetHorseChargePenetration` | 马冲穿透值。 | 沙盒固定返回 0.4。 |
| `DecideMissileWeaponFlags` | 改写导弹武器标志（如投掷穿刺），`ref WeaponFlags`。 | 沙盒在投掷 Perk 下设置对应 `WeaponFlags`。 |
| `ShouldMissilePassThroughAfterShieldBreak` | 盾破后导弹是否继续穿透。 | 沙盒固定返回 `false`。 |
| `CalculateRemainingMomentum` | 计算命中后剩余动量。 | 默认转调 `CalculateDefaultRemainingMomentum`（破防 0.3 倍等）。 |

### 武器能力判定

| 成员 | 用途 | 调用时机与副作用 |
| --- | --- | --- |
| `CanWeaponIgnoreFriendlyFireChecks` | 武器是否忽略友伤检测。 | 沙盒按特定 `WeaponFlags` 组合判定。 |
| `CanWeaponDealSneakAttack` | 是否可触发偷袭（背刺）。 | 沙盒按受害者 AI 状态 / 朝向判定。 |
| `CanWeaponDismount` | 武器是否能击落。 | 沙盒按部位、打击类型、Perk 判定。 |
| `CanWeaponKnockback` | 武器是否能击退。 | 沙盒按部位与武器标志判定。 |
| `CanWeaponKnockDown` | 武器是否能击倒。 | 沙盒按武器类 / 部位 / 甜点碰撞判定。 |

### 海战（v1.4.5 起）

| 成员 | 用途 | 调用时机与副作用 |
| --- | --- | --- |
| `CalculateSailFireDamage` | 帆着火伤害。 | 沙盒原样返回基础值。 |
| `CalculateHullFireDamage` | 船体着火伤害。 | 沙盒用 `ExplainedNumber` 包裹返回。 |

## 真实读取路径

以下代码只查询当前 Mission 中已注册的模型，并演示引擎入口 `CalculateDamage` 的真实获取路径（需要活跃 Mission）：

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.ComponentInterfaces;

// Mission 模型在 MissionGameModels.Current 上，不在 Campaign.Current.Models 上
if (MissionGameModels.Current == null)
{
    return; // 标题界面 / Mission 未开始或已结束时为 null
}

AgentApplyDamageModel model = MissionGameModels.Current.AgentApplyDamageModel;

// attackInfo / collisionData 由战斗命中结算提供；注意 in 只读传递
float damage = model.CalculateDamage(in attackInfo, in collisionData, baseDamage);
```

若只想在默认规则上叠加一个有限修正（例如全局减伤 15%），用构造期持有的 `_vanilla` 委托默认实现，**不要**在重写里再查 `MissionGameModels.Current`（会递归）：

```csharp
using System.Linq;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.ComponentInterfaces;

public sealed class GlassCannonDamageModel : AgentApplyDamageModel
{
    private readonly AgentApplyDamageModel _vanilla;

    public GlassCannonDamageModel(AgentApplyDamageModel vanilla)
    {
        _vanilla = vanilla;
    }

    // 只改“减伤”阶段：先走默认减伤，再叠加全局 -15% 因子
    public override float ApplyDamageReductions(
        in AttackInformation attackInformation,
        in AttackCollisionData collisionData,
        float baseDamage)
    {
        float reduced = _vanilla.ApplyDamageReductions(in attackInformation, in collisionData, baseDamage);
        return reduced * 0.85f;
    }

    // 其余抽象成员全部转发给 _vanilla，保证其它战斗规则不变
    public override bool IsDamageIgnored(in AttackInformation a, in AttackCollisionData c)
        => _vanilla.IsDamageIgnored(in a, in c);

    public override float ApplyDamageAmplifications(in AttackInformation a, in AttackCollisionData c, float b)
        => _vanilla.ApplyDamageAmplifications(in a, in c, b);

    public override float ApplyDamageScaling(in AttackInformation a, in AttackCollisionData c, float b)
        => _vanilla.ApplyDamageScaling(in a, in c, b);

    public override float ApplyGeneralDamageModifiers(in AttackInformation a, in AttackCollisionData c, float b)
        => _vanilla.ApplyGeneralDamageModifiers(in a, in c, b);

    // 带 ref / out 的成员同样按签名原样转发
    public override void DecideMissileWeaponFlags(Agent attackerAgent, in MissionWeapon missileWeapon, ref WeaponFlags missileWeaponFlags)
        => _vanilla.DecideMissileWeaponFlags(attackerAgent, in missileWeapon, ref missileWeaponFlags);

    public override void CalculateDefendedBlowStunMultipliers(
        Agent attackerAgent, Agent defenderAgent, CombatCollisionResult collisionResult,
        WeaponComponentData attackerWeapon, WeaponComponentData defenderWeapon,
        ref float attackerStunPeriod, ref float defenderStunPeriod)
        => _vanilla.CalculateDefendedBlowStunMultipliers(
            attackerAgent, defenderAgent, collisionResult, attackerWeapon, defenderWeapon,
            ref attackerStunPeriod, ref defenderStunPeriod);

    // 其余 Decide* / Can* / Get* / Calculate* 成员均转发 _vanilla（此处省略）
}
```

注册时从 `IGameStarter.Models` 取出 SandBox 已注册的默认实现作为 `_vanilla`（你的模块依赖 SandBox，故此时它已存在）：

```csharp
using System.Linq;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.ComponentInterfaces;

public class MySubModule : MBSubModuleBase
{
    protected override void OnGameStart(Game game, IGameStarter starterObject)
    {
        base.OnGameStart(game, starterObject);

        AgentApplyDamageModel vanilla =
            starterObject.Models.OfType<AgentApplyDamageModel>().FirstOrDefault();
        if (vanilla != null)
        {
            // 后注册覆盖先注册；构造期捕获 _vanilla 以避免递归
            starterObject.AddModel<AgentApplyDamageModel>(new GlassCannonDamageModel(vanilla));
        }
    }
}
```

## 导航

- ↑ [父级：mission-ext 索引](../)
- ↔ [同级：BattleMoraleModel](../BattleMoraleModel/)
- ↔ [同级：AgentDecideKilledOrUnconsciousModel](../AgentDecideKilledOrUnconsciousModel/)
- [Mission](../../mission/Mission/)
- [Agent](../../mission/Agent/)
- [MissionBehavior](../../mission/MissionBehavior/)
- [Formation](../../mission/Formation/)
- [Team](../../mission/Team/)
- [WeaponComponentData](../../core-extra/WeaponComponentData/)
- [BasicCharacterObject](../../campaign/CharacterObject/)
- [崩溃与存档边界](../../../architecture/crash-boundaries/)
