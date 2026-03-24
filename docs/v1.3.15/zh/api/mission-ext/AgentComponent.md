# AgentComponent

## 类概述

| 项目 | 说明 |
|------|------|
| **命名空间** | TaleWorlds.MountAndBlade |
| **文件路径** | TaleWorlds.MountAndBlade/AgentComponent.cs |
| **类型** | 抽象类 |

## 说明

`AgentComponent` 是可扩展的 Agent 行为系统基类。通过继承此类，可以为 Agent 添加自定义行为，如特殊状态、计时器、事件处理等。

## 关键属性

| 属性 | 类型 | 说明 |
|------|------|------|
| Agent | Agent | 所属 Agent 实例 |

## 关键方法

### 生命周期方法

| 方法 | 返回值 | 说明 |
|------|--------|------|
| Initialize() | void | 初始化 |
| OnTick(float dt) | void | 每帧更新 |
| OnTickParallel(float dt) | void | 并行更新 |

### 事件方法

| 方法 | 返回值 | 说明 |
|------|--------|------|
| OnItemPickup(SpawnedItemEntity item) | void | 捡起物品时 |
| OnWeaponDrop(MissionWeapon droppedWeapon) | void | 丢弃武器时 |
| OnStopUsingGameObject() | void | 停止使用游戏对象时 |
| OnWeaponHPChanged(ItemObject item, int hitPoints) | void | 武器耐久度改变时 |
| OnRetreating() | void | 撤退时 |
| OnMount(Agent mount) | void | 骑乘时 |
| OnDismount(Agent mount) | void | 下马时 |
| OnHit(Agent affectorAgent, int damage, in MissionWeapon affectorWeapon, in Blow b, in AttackCollisionData collisionData) | void | 受到伤害时 |
| OnDisciplineChanged() | void | 纪律改变时 |
| OnAgentRemoved() | void | Agent 被移除时 |
| OnAgentTeleported() | void | Agent 传送时 |
| OnFormationSet() | void | 编队设置时 |

### 士气相关方法

| 方法 | 返回值 | 说明 |
|------|--------|------|
| GetMoraleAddition() | float | 获取士气增加值 |
| GetMoraleDecreaseConstant() | float | 获取士气下降常数 |

## 使用示例

```csharp
// 创建自定义 Agent 组件
public class MyAgentComponent : AgentComponent
{
    private float _customTimer;

    public MyAgentComponent(Agent agent) : base(agent)
    {
        _customTimer = 0f;
    }

    public override void Initialize()
    {
        // 初始化逻辑
    }

    public override void OnTick(float dt)
    {
        _customTimer += dt;
        if (_customTimer > 5f)
        {
            // 每5秒执行一次
            _customTimer = 0f;
        }
    }

    public override void OnHit(Agent affectorAgent, int damage, 
        in MissionWeapon affectorWeapon, in Blow b, in AttackCollisionData collisionData)
    {
        // 受到伤害时的逻辑
    }
}

// 将组件附加到 Agent
Agent agent = // 获取 Agent;
agent.AddComponent(new MyAgentComponent(agent));
```
