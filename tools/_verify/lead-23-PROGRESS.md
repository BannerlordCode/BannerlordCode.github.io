# lead-23 进度（v1.4.6 / v1.4.7 / v1.5.3 / v1.4.5-en 缺页写作线）

## 分母（R1 过滤后，普查线实测）
- v1.4.5-en: 231
- v1.4.6: 5554（zh 队列；en 队列为 5621）
- v1.4.7: 5604（zh = en）
- v1.5.3: 5607（zh 队列；en 队列为 5736）
- 合计（按 brief 数字）: 16,996

## 队列清单
- `tools/_verify/missing-types-1.4.5-en.txt` — N=231，采样 2026-10-07T09:56:08Z
- `tools/_verify/missing-types-1.4.6-zh.txt` — N=5554
- `tools/_verify/missing-types-1.4.7-zh.txt` — N=5604
- `tools/_verify/missing-types-1.5.3-zh.txt` — N=5607
- 语言判定：brief 数字（5554/5604/5607）精确匹配 zh 队列文件；v1.4.5-en 显式 en。已向 boss 报告此理解，待确认。

## 关键发现
- 普查归一化不对称：I 前缀接口的类型 FQN（如 `TaleWorlds.CampaignSystem.IFaction`）归一化为 `ifaction`（I 不在串首，不剥离），而页面 `IFaction.md` 归一化为 `faction`（I 在串首，剥离）⇒ 即使有 shell 页也被计为「缺页」。
- ⇒ v1.4.5-en 的 231 个「缺页」绝大多数已有 auto-generated shell，任务是 **enhance（覆写为深页）**，不是新建。
- 已核实的 shell 旧 md5（批前）：
  - IFaction: b578e0a3737a30a01ae6df6fc7f1fd94
  - IFormation: 8603ee39aa67f431771d4ce888dc5ce0
  - ISaveDriver: ef89bcfd6bee3781b0df7a97e223e304
  - IViewModel: ab1a6f9812f4bf244bbe52437c0b1619
  - IGameStateManagerListener: 42d5036cc02a633f56b36133b6fd80d4

## 批次 1（v1.4.5-en，5 页，全部 enhance shell）—— ✅ 完成
- 派单时刻：2026-10-07T10:10Z
- W1 (worker-216): 静默失败（声称写但 md5 未变）→ 取消
- W1b (worker-218, text-medium): IFaction + IFormation + ISaveDriver ✅
- W2 (worker-217, text-medium): IViewModel + IGameStateManagerListener ✅
- 验收：5/5 md5 变了、7 H2 + 3 H3 齐全、U+FFFD=0、链接合规、无 autogen 描述
- 门禁：audit-links BROKEN_LINKS=0（与基线一致）
- 索引：5 页均已在各自 _index.md SECTION INDEX 中（shell 已索引），enhance 无需改索引

### 批次 1 验收明细
| 页 | bytes | md5（新） | 旧 md5 | 状态 |
|---|---:|---|---|---|
| IFaction | 12104 | d2bfcf3c… | b578e0a3… | ✅ |
| IFormation | 8785 | 2a82b62f… | 8603ee39… | ✅ |
| ISaveDriver | 7686 | 39e6e5d4… | ef89bcfd… | ✅ |
| IViewModel | 8076 | c894f319… | ab1a6f98… | ✅ |
| IGameStateManagerListener | 6596 | 5422c821… | 42d5036c… | ✅ |

### 第一批 5 页路径
1. content/v1.4.5/en/api/campaign/IFaction.md
2. content/v1.4.5/en/api/mission-ext/IFormation.md
3. content/v1.4.5/en/api/save-system/ISaveDriver.md
4. content/v1.4.5/en/api/core-extra/IViewModel.md
5. content/v1.4.5/en/api/core-extra/IGameStateManagerListener.md

## 门禁
- 批前 audit-links BROKEN_LINKS: 待测
- 批后 audit-changed-links: 待跑
- 索引更新：派单方（我）执行，worker 不写 _index.md

## 未完成项
- v1.4.5-en 剩余 226 页（批 1 完成 5 页）
- 大三棵（zh）16,765 页未动
- 批 2：从 v1.4.5-en 队列取下一批 5 页
