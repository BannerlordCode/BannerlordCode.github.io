# Wave #O 验收证据 — Campaign 关系/协议状态簇（6 页）

派发时间：2026-08-18 ~19:29 · 验收时间：~19:42

## 目标（6 页，整页手写 → deep_pass）
`content/v1.4.5/zh/api/campaign/`：Pregnancy · HeroRelations · Alliance · StanceType · TradeAgreement · Grievance

## 三重复验（全绿）

### (a) classifyPage（tools/_verify_waveO_classify.mjs → tools/lib/handwritten-policy.mjs）
```
PASS content/v1.4.5/zh/api/campaign/Pregnancy.md     -> deep_pass [mental>80|dep-or-see-links=9|real-csharp-example|overview-ok]
PASS content/v1.4.5/zh/api/campaign/HeroRelations.md -> deep_pass [mental>80|dep-or-see-links=10|real-csharp-example|overview-ok]
PASS content/v1.4.5/zh/api/campaign/Alliance.md      -> deep_pass [mental>80|dep-or-see-links=12|real-csharp-example|overview-ok]
PASS content/v1.4.5/zh/api/campaign/StanceType.md    -> deep_pass [mental>80|dep-or-see-links=8|real-csharp-example|overview-ok]
PASS content/v1.4.5/zh/api/campaign/TradeAgreement.md-> deep_pass [mental>80|dep-or-see-links=7|real-csharp-example|overview-ok]
PASS content/v1.4.5/zh/api/campaign/Grievance.md     -> deep_pass [mental>80|dep-or-see-links=6|real-csharp-example|overview-ok]
ALL_DEEP_PASS
```

### (b) 禁止样板 Grep（14 类 STUB_PATTERNS）
6 页全部 0 命中（覆盖：英文元数据标签、`./Name` 兄弟链接、`X 是 TaleWorlds.Y 下的公开类型`、`读取并返回当前对象中…`、`null; // 替换`、`SomeValue`、`service =`、`*Implementation`、`本区域目录`、`Read properties…`、`先从命名空间` 等）。

### (c) 链接审计（AUDIT_MODE=url AUDIT_CONTENT_ROOT=content/v1.4.5/zh/api node tools/audit-links.mjs）
```
FILES_WITH_BROKEN=0
RESOLVE_NEITHER=0   (BROKEN_LINKS=0)
RESOLVE_OK_URL=30892 / RESOLVE_OK_FILE=20767
```

## 覆盖率重算（tools/_fresh_inventory.mjs --api-only）
- total pages scanned: 9421
- `deep_pass`: **451 → 457（+6）**
- `stub`: **8869 → 8863（−6）**
- family_entry_pass=73 / noise=28（不变）

## 源定位（TARGET）
- Pregnancy — PregnancyCampaignBehavior.cs:35 (internal class, 嵌套)
- HeroRelations — CharacterRelationManager.cs:11 (internal class)
- Alliance — AllianceCampaignBehavior.cs:38 (internal struct, 主构造函数)
- StanceType — StanceType.cs:3 (internal enum)
- TradeAgreement — TradeAgreementsCampaignBehavior.cs:33 (public struct, 嵌套)
- Grievance — CompanionGrievanceBehavior.cs:43 (internal class)

## 健康 / 待裁决
- 结构口径（旧 R1）：gap=0 / sTier 62/62 / 质量 blockers=0（CI 绿）。
- 内容口径（新）：stub 8863（94.1%）/ deep_pass 457。
- 四项战略决策仍挂起：①`audit:quality:strict` 接 CI 硬门禁；②每周期并行手写节奏固化；③覆盖口径改判「达标=真手写」；④campaign/ vs campaign-ext/ 重复树去重裁定（~1313 孤儿 stub 副本）。
